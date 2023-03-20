import {Component} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
  Modal,
} from 'react-native';
import MoviePosterCards from './components/MoviePosterCards';
import SearchBar from './components/SearchBar';
import MovieDetailScreen from './MovieDetailsScreen';
import LoadingActivity from './components/LoadingActivity';

export class MovieListScreen extends Component {
  state = {
    url: 'https://www.omdbapi.com/?apikey=b9bd48a6',

    searchData: [],
    searchText: 'Marvel',
    isLoading: false,
    modalVisible: false,
    movieDetailData: null,
    errorMessage: null,
    totalResults: 0,
    pageNum: 1,
    savedText: '',
    isInitial: true,
  };
  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies(pressed) {
    if (this.state.searchText != this.state.savedText && pressed) {
      this.setState({searchData: [], pageNum: 1});
    }
    this.setState({isLoading: true});
    console.log(this.state.url + '&s=' + this.state.searchText);
    return fetch(
      this.state.url +
        '&s=' +
        this.state.searchText +
        '&page=' +
        this.state.pageNum,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.Response === 'False') {
          this.setState({
            isLoading: false,
            searchData: null,
            errorMessage: responseJson.Error,
            totalResults: '0',
            isInitial: false,
          });
        } else {
          let searchData = this.state.searchData;
          if (searchData == []) this.state.searchData = responseJson.Search;
          else this.state.searchData = [...searchData, ...responseJson.Search];
          this.setState(
            {
              isLoading: false,
              isInitial: false,
              totalResults: responseJson.totalResults,
              pageNum: 1,
              savedText: this.state.searchText,
            },
            () => console.log(this.state.searchData),
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchDetails(imdbID) {
    return fetch(this.state.url + '&i=' + imdbID, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({movieDetailData: responseJson}, () =>
          this.setState({modalVisible: true}),
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return this.state.isInitial ? (
      <LoadingActivity />
    ) : (
      <View>
        {this.state.isLoading ? (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              elevation: 10,
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              paddingBottom: 200,
            }}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{color: 'white', fontSize: 20}}>
              Loading Please Wait...
            </Text>
          </View>
        ) : (
          <View />
        )}
        <View style={styles.topContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <MovieDetailScreen
                data={this.state.movieDetailData}
                onPress={() => this.setState({modalVisible: false})}
              />
            </View>
          </Modal>
          <Text style={styles.text}>Movies</Text>
          <SearchBar
            value={this.state.searchText}
            onChangeText={value => this.setState({searchText: value})}
            onPress={() => this.fetchMovies(true)}
            totalResults={this.state.totalResults}
            pageNum={this.state.pageNum}
          />
        </View>
        {this.state.searchData === null ? (
          <View style={{height: '100%', width: '100%', marginTop: 200}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              {this.state.errorMessage} Please try again!
            </Text>
          </View>
        ) : (
          <FlatList
            data={this.state.searchData}
            onEndReached={({distanceFromEnd}) => {
              console.log(distanceFromEnd);
              if (distanceFromEnd == 0 && this.state.isLoading == false) {
                console.log('flatlist end');
                this.setState({pageNum: this.state.pageNum + 1}, () =>
                  this.fetchMovies(),
                );
              }
            }}
            numColumns={2}
            contentContainerStyle={{paddingTop: 10}}
            ListFooterComponent={<View style={{paddingBottom: 315}} />}
            renderItem={({item}) => {
              return (
                <View style={styles.container}>
                  <View style={styles.insideContainer}>
                    <MoviePosterCards
                      Poster={item.Poster}
                      Year={item.Year}
                      Title={item.Title}
                      onPress={() => this.fetchDetails(item.imdbID)}
                    />
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#000000FF',
  },
  text: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFFFF',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  insideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    marginBottom: 10,
    marginRight: 5,
  },
});

export default MovieListScreen;
