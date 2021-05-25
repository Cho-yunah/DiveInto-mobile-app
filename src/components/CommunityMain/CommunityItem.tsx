import React, { useEffect } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles';
import {ContentItem} from './CommunityList'

export default function CommunityItem({imageSrc, title, postAuthor,postingDate}: ContentItem) {

  return (
    <View>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8} >
           <Image style={styles.thumnailImage} source={{uri: imageSrc}}/>
          <View style={styles.contentInfo}>
            <View><Text>{title}</Text></View>
            <View>
              <Text>
                {postAuthor}
                <Entypo name='dot-single' size={14} color="#343434"/>
                {postingDate}
              </Text>
            </View>
          </View>
          <View style= {styles.iconBox}>
          <TouchableOpacity activeOpacity={0.5} style={styles.commentAndLike}>
            <MaterialIcons name='comment' size={14} color="#D8D8D8"/>
            <Text style={{color: '#D8D8D8', fontSize: 14}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.commentAndLike} >
            <FontAwesome name='heart' size={14} color="#D8D8D8"/>
            <Text style={{color: '#D8D8D8', fontSize: 14}}>5</Text>
          </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
  )
}

