import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardHeader = ({profilePictureUri, name, date}: any) => {
  return (
    <View
      style={{
        height: 64,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24,
      }}>
      <Image
        style={{borderRadius: 20, height: 38, width: 38}}
        source={{
          uri:
            profilePictureUri ??
            'https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=',
        }}
      />
      <View style={{justifyContent: 'center', marginLeft: 14}}>
        <View>
          <Text style={{fontWeight: 'bold', color: '#000'}}>{name}</Text>
        </View>
        <Text style={{color: '#676464'}}>{date}</Text>
      </View>
    </View>
  );
};

export default CardHeader;
