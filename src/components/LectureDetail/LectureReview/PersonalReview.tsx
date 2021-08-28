import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ReviewListStyles as RS } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Pics from './Pics';
import OpenStars from './OpenStars';
import CloseStars from './CloseStars';
import { lectureReviewType } from '@/src/recoil/LectureStack';

const PersonalReview = ({ item }: { item: lectureReviewType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      style={RS.personalReviewContainer}
      onPress={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <>
          <FontAwesome size={16} style={RS.upDownIcon} name="angle-up" />
          <View style={RS.openStarsContainer}>
            <OpenStars ratingName="강사" rate={item.instructorStar} />
            <OpenStars ratingName="강의" rate={item.lectureStar} />
            <OpenStars ratingName="장소" rate={item.locationStar} />
          </View>
        </>
      ) : (
        <>
          <Text style={RS.avgRateText}>
            평점 {item.totalStarAvg.toFixed(1)}점
          </Text>
          <CloseStars avgRate={item.totalStarAvg} />
          <FontAwesome size={16} style={RS.upDownIcon} name="angle-down" />
        </>
      )}
      <View
        style={[
          RS.contentContainer,
          { flexDirection: isOpen ? 'column' : 'row' },
        ]}
      >
        {item.reviewImageUrls.length && !isOpen ? (
          <FontAwesome name="picture-o" size={16} />
        ) : null}
        {isOpen ? (
          <>
            <Text style={[RS.contentText, { fontSize: 12, marginBottom: 4 }]}>
              {item.writeDate.replace(/-/g, '/')} 작성
            </Text>
            <Text style={RS.contentText}>{item.description}</Text>
            <Pics pics={item.reviewImageUrls} />
          </>
        ) : (
          <Text
            style={[
              RS.contentText,
              {
                paddingLeft: item.reviewImageUrls.length ? 12 : 0,
                width: isOpen ? '100%' : 332,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default PersonalReview;
