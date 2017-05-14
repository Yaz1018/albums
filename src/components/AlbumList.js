import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in album list');
  }
  render() {
    return (
      <View>
        <Text>Album List!!! Veronica is the best</Text>
      </View>
    );
  }
}

export default AlbumList;
