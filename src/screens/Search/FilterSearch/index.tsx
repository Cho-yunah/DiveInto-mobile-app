import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import * as colors from '@config/colors';

import { useRecoilValue } from 'recoil';
import {
  FilterOrganization,
  FilterRegion,
  FilterLevel,
  FilterCostCondition,
} from '@recoil/LectureSearch';

import { FilterModal } from '@components/FilterSearch';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { PopularLecture } from '@components/MainList/Lecture/PopularLectureList';
import { PopularLectureProps } from '@components/MainList/Lecture/types';

import { getInstanceATK } from '@lib/api/axios';

export function FilterSearch() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { organization } = useRecoilValue(FilterOrganization);
  const { region } = useRecoilValue(FilterRegion);
  const { level } = useRecoilValue(FilterLevel);
  // const cost = useRecoilValue(FilterCostCondition);

  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(0);
  const [lectures, setLectures] = useState<PopularLectureProps[]>([]);

  const onFilterIconPress = () => setIsModalVisible(true);
  const onModalClose = () => setIsModalVisible(false);

  const getData = async () => {
    console.log(organization, region, level);
    try {
      const instanceAtk = await getInstanceATK();

      const res = await instanceAtk.post(
        `/lecture/list/search/filter?page=${page}&size=5`,
        {
          organization,
          level,
          region,
          classKind: '프리 다이빙',
          costCondition: {
            max: 150000,
            min: 100000,
          },
        },
      );

      console.log(res.data._embedded);

      const status = res.status;
      if (status !== 200) throw new Error('필터강의 조회 에러');

      const newLectures = res.data._embedded.lectureInfoList;
      setLectures(lectures.concat(newLectures));
      setPage(page + 1);
    } catch (e) {
      console.log('강의 필터 조회 에러 : ', e);
    }
  };

  useLayoutEffect(() => {
    setLectures([]);
    setPage(0);
    getData();
  }, [reload]);

  const handleLoadMore = () => {
    getData();
  };

  const renderItem = ({ item }: { item: PopularLectureProps }) => {
    console.log('lecture : ', item);
    return (
      <PopularLecture
        id={item.id}
        title={item.title}
        organization={item.organization}
        level={item.level}
        region={item.region}
        maxNumber={item.maxNumber}
        lectureTime={item.lectureTime}
        equipmentNames={item.equipmentNames}
        imageUrl={item.imageUrl}
        isMarked={item.isMarked}
        price={item.price}
        period={item.period}
        starAvg={item.starAvg}
        reviewCount={item.reviewCount}
      />
    );
  };

  return (
    <>
      <View
        style={[
          {
            marginTop: 10,
            backgroundColor: colors.White,
            borderRadius: 15,
            zIndex: 2,
            marginLeft: 10,
            marginRight: 10,
          },
          styles.shadow,
        ]}
      >
        <View style={styles.filterSelector}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.filterButton}
            onPress={onFilterIconPress}
          >
            <Icons name="filter-menu" size={23} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>필터</Text>
          </TouchableOpacity>
          <View style={styles.filtersContainer}>
            {organization && (
              <Text style={styles.filterFont}>{organization}</Text>
            )}
            {region && <Text style={styles.filterFont}>{region}</Text>}
            {level && <Text style={styles.filterFont}>{level}</Text>}
          </View>
        </View>
      </View>

      {lectures && (
        <FlatList
          data={lectures}
          renderItem={renderItem}
          keyExtractor={(item, index) => `filterLecture${item.id}`}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          style={{ padding: 15 }}
        />
      )}
      <FilterModal
        onFilterOk={() => {
          setReload(!reload);
          onModalClose();
        }}
        modalClose={onModalClose}
        modalVisible={isModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  filterSelector: {
    flexDirection: 'row',
    // borderTopWidth: 0.3,
    // borderBottomWidth: 0.3,
    padding: 8,
    color: 'grey',
  },
  filterButton: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.PointBlue,
    backgroundColor: colors.PointBlue,
  },
  filterFont: {
    fontSize: 15,
    fontWeight: '500',
    borderRadius: 5,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 5,
  },
});
