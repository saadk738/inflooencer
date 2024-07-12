import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { acolors } from '../constants/colors';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const getIcon = (routeName, focused) => {
    switch (routeName) {
      case 'Home':
        return focused
          ? require('../assets/imgs/homeActive.png')
          : require('../assets/imgs/home.png');
      case 'Events':
        return focused
          ? require('../assets/imgs/eventActive.png')
          : require('../assets/imgs/event.png');
      case 'Wallet':
        return focused
          ? require('../assets/imgs/walletActive.png')
          : require('../assets/imgs/wallet.png');
      case 'Profile':
        return focused
          ? require('../assets/imgs/profileActive.png')
          : require('../assets/imgs/profile.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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
            navigation.navigate(route.name);
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
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab, label == 'Events' ? { marginRight: 30, } : label == 'Wallet' ? { marginLeft: 30 } : {}]}
          >
            <Image
              source={getIcon(route.name, isFocused)}
              style={styles.icon}
            />
            <Text style={[styles.tabText, { color: isFocused ? acolors.primary : '#222' }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddMedia')}
        style={styles.addButtonOuter}>
        <View style={styles.addButton} >
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  addButtonOuter: {
    position: 'absolute',
    bottom: 30,
    left: '44%',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    alignSelf: 'center',
    backgroundColor: acolors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 29,
  },
  tabText: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 12,
  }
});

export default BottomTabBar;
