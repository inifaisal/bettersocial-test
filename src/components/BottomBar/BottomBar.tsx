import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Svg, Path} from 'react-native-svg';

import ProfilePicture from '../../assets/profile-picture.jpeg';

export const BottomBar = ({state, descriptors, navigation}: any) => {
  const getIcon = (label: String, isFocused: boolean) => {
    if (label === 'Feed') {
      return (
        <Svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{color: isFocused ? '#9b9b9b' : '#ccc', width: 32, height: 32}}
          viewBox="0 0 24 24">
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </Svg>
      );
    }

    if (label === 'Chat') {
      return (
        <Svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{color: isFocused ? '#9b9b9b' : '#ccc', width: 32, height: 32}}
          viewBox="0 0 24 24">
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </Svg>
      );
    }

    if (label === 'Notification') {
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{color: isFocused ? '#9b9b9b' : '#ccc', width: 32, height: 32}}
          viewBox="0 0 24 24">
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </Svg>
      );
    }

    if (label === 'Profile') {
      return (
        <Image
          source={ProfilePicture}
          style={{borderRadius: 20, height: 32, width: 32}}
        />
      );
    }

    return <Text>{label}</Text>;
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {getIcon(label, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
