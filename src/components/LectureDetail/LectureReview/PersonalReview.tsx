import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ReviewListStyles as RS } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PersonalReviewProps, PersonalReviewItem } from './types';
import Pics from './Pics';

const CloseStars = ({
  avgRate,
}: {
  avgRate: PersonalReviewItem['avgRate'];
}) => {
  const stars = [];
  const diff = avgRate - Math.floor(avgRate);

  for (let i = 0; i <= avgRate - 1; i++) {
    stars.push(<FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />);
  }

  if (diff > 0 && diff < 1)
    stars.push(
      <FontAwesome name="star-half" size={16} color={'rgb(248,194,93)'} />,
    );

  return <View style={RS.closeStars}>{stars.map(star => star)}</View>;
};

const OpenStars = ({
  rate,
  ratingName,
}: {
  rate: number;
  ratingName: string;
}) => {
  const stars = [];
  const diff = rate - Math.floor(rate);

  for (let i = 0; i <= rate - 1; i++) {
    stars.push(<FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />);
  }
  if (diff > 0 && diff < 1)
    stars.push(
      <FontAwesome name="star-half" size={16} color={'rgb(248,194,93)'} />,
    );

  return (
    <View>
      <Text style={RS.openStarText}>{ratingName}</Text>
      <View style={RS.openStars}>{stars.map(star => star)}</View>
    </View>
  );
};

const PersonalReview = ({ index, item }: PersonalReviewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      key={index}
      style={RS.personalReviewContainer}
      onPress={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <>
          <FontAwesome size={16} style={RS.upDownIcon} name="angle-up" />
          <View style={RS.openStarsContainer}>
            <OpenStars ratingName="강사" rate={item.instructorRate} />
            <OpenStars ratingName="강의" rate={item.lectureRate} />
            <OpenStars ratingName="장소" rate={item.locationRate} />
          </View>
        </>
      ) : (
        <>
          <Text style={RS.avgRateText}>평점 {item.avgRate}점</Text>
          <CloseStars avgRate={item.avgRate} />
          <FontAwesome size={16} style={RS.upDownIcon} name="angle-down" />
        </>
      )}
      <View
        style={[
          RS.contentContainer,
          { flexDirection: isOpen ? 'column' : 'row' },
        ]}
      >
        {item.pics.length && !isOpen ? (
          <FontAwesome name="picture-o" size={16} />
        ) : null}
        {isOpen ? (
          <>
            <Text style={RS.contentText}>{item.content}</Text>
            <Pics pics={item.pics} />
          </>
        ) : (
          <Text
            style={[
              RS.contentText,
              {
                paddingLeft: item.pics.length ? 12 : 0,
                width: isOpen ? '100%' : 332,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.content}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default PersonalReview;
