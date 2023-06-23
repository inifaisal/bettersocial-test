import React from 'react';
import {FlatList, View} from 'react-native';
import Card from '../components/Post/Card';
import FloatingActionButton from '../components/Button/FloatingActionButton';

import {feedlist} from '../feedlist';
const Feed = () => {
  const renderItem = ({item}) => {
    return <Card feed={item} />;
  };

  return (
    <View>
      <FlatList
        data={feedlist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FloatingActionButton />
    </View>
  );
};

export default Feed;
