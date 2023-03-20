import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MovieListScreen from './screens/MoviesListScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MovieListScreen />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131212ff',
  },
});
