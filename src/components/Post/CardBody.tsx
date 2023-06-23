import React from 'react';
import {Image, View, Text} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

const CardBody = ({text, image}: any) => {
  const renderViewMore = (onPress: any) => {
    return (
      <Text style={{color: '#48afe3'}} onPress={onPress}>
        View more
      </Text>
    );
  };
  const renderViewLess = (onPress: any) => {
    return (
      <Text style={{color: '#48afe3'}} onPress={onPress}>
        View less
      </Text>
    );
  };

  return (
    <View
      style={{
        height: 431,
        position: 'relative',
        flex: 1,
      }}>
      {text?.length > 0 && (
        <View style={{padding: 24}}>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}>
            <Text style={{fontSize: 16, color: '#000'}}>{text}</Text>
          </ViewMoreText>
        </View>
      )}

      <View style={{flex: 1}}>
        <Image
          source={{uri: image}}
          style={{height: '100%', backgroundColor: '#ccc'}}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default CardBody;
