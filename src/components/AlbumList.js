import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Kinvey from 'kinvey-html5-sdk';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    Kinvey.initialize({
      appKey: 'kid_H1Fi5P0kb',
      appSecret: '778f370802c94ce884a589b5f279142b'
    });
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
