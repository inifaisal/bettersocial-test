import React from 'react';
import {View} from 'react-native';

import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const Card = ({feed}: any) => {
  const post = feed.post;
  return (
    <View style={{backgroundColor: '#fff', height: 547, marginBottom: 10}}>
      <CardHeader
        name={feed.name}
        date={feed.date}
        profilePictureUri={feed.profilePictureUri}
      />
      <CardBody image={post.image} text={post.text} />
      <CardFooter
        voteCount={post.stats.vote}
        commentCount={post.stats.comments}
      />
    </View>
  );
};

export default Card;
