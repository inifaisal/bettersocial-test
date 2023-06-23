import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const CardFooter = ({voteCount = 0, commentCount = 0}) => {
  const [localVote, setLocalVote] = useState(voteCount);

  const onUpVote = () => {
    setLocalVote(localVote + 1);
  };

  const onDownVote = () => {
    if (localVote > 0) {
      setLocalVote(localVote - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <TouchableOpacity>
          <Svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            style={styles.icon}
            viewBox="0 0 24 24">
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCounter}>
          <Svg
            style={styles.icon}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24">
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </Svg>
          <Text style={{color: '#ccc'}}>{commentCount}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <TouchableOpacity>
          <Svg
            style={styles.icon}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24">
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={onUpVote}>
          <Svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <Path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </Svg>
        </TouchableOpacity>
        <View style={{marginRight: 10}}>
          <Text style={{color: '#0fb2ba'}}>{localVote}</Text>
        </View>
        <TouchableOpacity onPress={onDownVote}>
          <Svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <Path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  iconCounter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 24,
    width: 24,
    color: '#ccc',
    marginRight: 8,
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CardFooter;
