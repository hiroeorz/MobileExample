import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './action.js';
import PropTypes from 'prop-types';

import { styles } from './styles.js';

class HttpScreen extends React.Component {
  static navigationOptions = {
    title: "HTTP通信"
  }

  render() {
    var movies = [];

    for (let i in this.props.movieList.movies) {
      var movie = this.props.movieList.movies[i];
      movies.push(<Text key={ i }> * { movie.title }</Text>);
    }

    return (
      <View style={styles.container}>
        <Button title="取得" onPress={ this._handleGetMoviewList.bind(this) } />
        <Text>タイトル: { this.props.movieList.title }</Text>
        <Text>説明: { this.props.movieList.description }</Text>
        <Text>ムービー一覧</Text>
        { movies.map((m) => {return m;}) }
      </View>
    );
  }

  _handleGetMoviewList(e) {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json() )
        .then((responseJson) => {
          this.props.updateMoviewList(responseJson);
        })
      .catch((error) => {
        Alert.alert("通信エラーが発生しました");
        console.error(error);
      });
  }
}

HttpScreen.propTypes = {
  moviewList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    movieList: PropTypes.arrayOf({
      title: PropTypes.string,
      releaseYear: PropTypes.string
    })
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HttpScreen);
