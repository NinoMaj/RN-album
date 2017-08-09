import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor() {
    super();

    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          albums: responseData,
        });
      })
      .catch(err => console.error(err));
  }

  renderList() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />,
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }
}

export default AlbumList;
