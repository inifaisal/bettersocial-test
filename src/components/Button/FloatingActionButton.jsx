import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const FloatingActionButton = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#00acb5',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        bottom: 62,
        right: 20,
        shadowOffset: {
          width: 50,
          height: -50,
        },
        shadowOpacity: 0.1,
        shadowRadius: 25,
        shadowColor: 'black',
      }}>
      <TouchableOpacity elevation={10}>
        <Svg
          style={{width: 24, height: 24}}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          color="#fff"
          viewBox="0 0 24 24">
          <Path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2z" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingActionButton;
