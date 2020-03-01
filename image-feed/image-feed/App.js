import { Constants } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Feed from './screens/Feed';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed style={styles.feed} />
      </View>
    );
  }

  const items = [
    { id: 0, author: 'Bob Ross' },
    { id: 1, author: 'Chuck Norris' },
  ];

  const platformVersion =
  Platform.OS === 'ios'
  ? parseInt(Platform.Version, 10)
  : Platform.Version;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    feed: {
      flex: 1,
      marginTop:
      Platform.OS === 'android' || this.platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
    },
  });
}

// ...

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
