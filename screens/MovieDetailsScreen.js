import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

export class MovieDetailScreen extends Component {
  state = {designView: 1};
  render() {
    return this.props.movieDetailData !== null ? (
      <ScrollView style={styles.modalView}>
        <View style={styles.container}>
          {this.state.designView == 1 ? (
            <View>
              {this.props.data.Poster === 'N/A' ? (
                <View style={styles.posterBox}>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{
                        borderRadius: 5,
                        padding: 10,
                        alignItems: 'baseline',
                      }}
                      onPress={() => this.props.onPress()}>
                      <View style={{flexDirection: 'row'}}>
                        <MaterialIcons
                          name="arrow-back-ios"
                          style={{fontSize: 30, color: 'white'}}
                        />
                        <Text style={styles.arrowText}>Back</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={styles.textPoster}>No Poster </Text>
                  </View>
                  <View style={{alignItems: 'center', marginHorizontal: 10}}>
                    <Text style={[styles.titleStyle, styles.shadowBg]}>
                      {this.props.data.Title}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imgStyle}
                    source={{uri: this.props.data.Poster}}>
                    <View style={{marginLeft: 5, marginTop: 3}}>
                      <TouchableOpacity
                        style={{
                          borderRadius: 5,
                          padding: 10,
                          alignItems: 'baseline',
                        }}
                        onPress={() => this.props.onPress()}>
                        <View style={[{flexDirection: 'row'}, styles.shadowBg]}>
                          <MaterialIcons
                            name="arrow-back-ios"
                            style={{fontSize: 25, color: 'white'}}
                          />
                          <Text style={styles.arrowText}>Back</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      alignItems: 'center',
                      marginHorizontal: 10,
                    }}>
                    <Text style={[styles.titleStyle, styles.shadowBg]}>
                      {this.props.data.Title}
                    </Text>
                  </View>
                </View>
              )}
              <View style={styles.textContainer}>
                <View style={styles.containerDetails}>
                  <View>
                    <Text style={styles.headerStyle}>DURATION</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.textStyle, {marginRight: 5}]}>
                        {this.props.data.Runtime}
                      </Text>
                      <Text style={{marginVertical: 5}}>
                        <MaterialCommunityIcons
                          name="timer-sand-empty"
                          color="white"
                          style={{fontSize: 18}}
                        />
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.headerStyle}>Rated</Text>
                    <Text style={styles.textStyle}>
                      {this.props.data.Rated}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.headerStyle}>Release Date</Text>
                    <Text style={styles.textStyle}>
                      {this.props.data.Released}
                    </Text>
                  </View>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={[styles.headerStyle]}>GENRE</Text>
                  <Text style={styles.textStyle}>{this.props.data.Genre}</Text>
                </View>
                <View>
                  <Text style={[styles.headerStyle, {marginTop: 10}]}>
                    PLOT SUMMARY
                  </Text>
                  <Text style={styles.textStyle}>{this.props.data.Plot}</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.headerStyle}>CAST OVERVIEW</Text>
                  <Text style={styles.textStyle}>{this.props.data.Actors}</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={[styles.headerStyle]}>DIRECTOR</Text>
                  <Text style={styles.textStyle}>
                    {this.props.data.Director}
                  </Text>
                </View>

                <View style={styles.containerDetails}>
                  <View>
                    <Text style={styles.headerStyle}>METASCORE</Text>
                    <Text style={styles.textStyle}>
                      {this.props.data.Metascore}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.headerStyle}>IMDB VOTES</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.textStyle, {marginRight: 5}]}>
                        {this.props.data.imdbVotes}
                      </Text>
                      <Text style={{marginVertical: 5}}>
                        <Fontisto
                          name="like"
                          color="white"
                          style={{fontSize: 18}}
                        />
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.headerStyle}>IMDB RATING</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.textStyle, {marginRight: 5}]}>
                        {this.props.data.imdbRating}
                      </Text>
                      <Text style={{marginVertical: 5}}>
                        <FontAwesome
                          name="star"
                          color="#b9b143"
                          style={{fontSize: 18}}
                        />
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              <View>
                <View>
                  <Text style={styles.headerStyleB}>
                    {this.props.data.Title}
                  </Text>
                </View>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subHeaderStyleB}>
                      {this.props.data.Year}
                    </Text>
                    <Text
                      style={{
                        color: '#8fd8e2',
                        fontSize: 13,
                        marginTop: 10,
                        marginLeft: 2,
                      }}>
                      {'['}
                      {this.props.data.Language}
                      {']'}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.subHeaderStyleB}>
                    {this.props.data.Genre}
                  </Text>
                </View>
              </View>
              <View>
                {this.props.data.Poster === 'N/A' ? (
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.posterBoxB}>
                      <View>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 20,
                          }}>
                          No Poster
                        </Text>
                      </View>
                    </View>
                    <View style={{marginLeft: 10, marginTop: 5}}>
                      <View>
                        <Text style={styles.headerStyle}>METASCORE</Text>
                        <Text style={styles.textStyle}>
                          {this.props.data.Metascore}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.headerStyle}>IMDB VOTES</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.textStyle, {marginRight: 5}]}>
                            {this.props.data.imdbVotes}
                          </Text>
                          <Text style={{marginVertical: 5}}>
                            <Fontisto
                              name="like"
                              color="white"
                              style={{fontSize: 18}}
                            />
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.headerStyle}>IMDB RATING</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.textStyle, {marginRight: 5}]}>
                            {this.props.data.imdbRating}
                          </Text>
                          <Text style={{marginVertical: 5}}>
                            <FontAwesome
                              name="star"
                              color="#b9b143"
                              style={{fontSize: 18}}
                            />
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image
                        style={styles.imageStyle}
                        source={{uri: this.props.data.Poster}}
                      />
                    </View>
                    <View style={{marginTop: 5}}>
                      <View>
                        <Text style={styles.headerStyle}>METASCORE</Text>
                        <Text style={styles.textStyleB}>
                          {this.props.data.Metascore}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.headerStyle}>IMDB VOTES</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.textStyleB, {marginRight: 5}]}>
                            {this.props.data.imdbVotes}
                          </Text>
                          <Text style={{marginVertical: 5}}>
                            <Fontisto
                              name="like"
                              color="white"
                              style={{fontSize: 18}}
                            />
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.headerStyle}>IMDB RATING</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.textStyleB, {marginRight: 5}]}>
                            {this.props.data.imdbRating}
                          </Text>
                          <Text style={{marginVertical: 5}}>
                            <FontAwesome
                              name="star"
                              color="#b9b143"
                              style={{fontSize: 18}}
                            />
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              </View>
              <View style={styles.containerDetails}>
                <View>
                  <Text style={styles.subHeaderStyleB}>DURATION</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.textStyleB, {marginRight: 5}]}>
                      {this.props.data.Runtime}
                    </Text>
                    <Text style={{marginVertical: 5}}>
                      <MaterialCommunityIcons
                        name="timer-sand-empty"
                        color="white"
                        style={{fontSize: 18}}
                      />
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.subHeaderStyleB}>RATED</Text>
                  <Text style={styles.textStyleB}>{this.props.data.Rated}</Text>
                </View>
                <View>
                  <Text style={styles.subHeaderStyleB}>RELEASE DATE</Text>
                  <Text style={styles.textStyleB}>
                    {this.props.data.Released}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.subHeaderStyleB}>PLOT SUMMARY</Text>
                <Text style={styles.textStyleB}>{this.props.data.Plot}</Text>
              </View>
              <View>
                <Text style={[styles.subHeaderStyleB]}>DIRECTOR</Text>
                <Text style={styles.textStyleB}>
                  {this.props.data.Director}
                </Text>
              </View>
              <View>
                <Text style={styles.subHeaderStyleB}>CAST OVERVIEW</Text>
                <Text style={styles.textStyleB}>{this.props.data.Actors}</Text>
              </View>
              <View>
                <Text style={styles.subHeaderStyleB}>AWARDS</Text>
                <Text style={styles.textStyleB}>{this.props.data.Awards}</Text>
              </View>
            </View>
          )}

          <View style={{marginVertical: 10}}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.setState({
                    designView: this.state.designView == 1 ? 2 : 1,
                  })
                }>
                <Text style={styles.buttonText}>Change View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    ) : (
      <View />
    );
  }
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 8,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#e6e1e1',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  modalView: {
    backgroundColor: '#131212ff',

    // padding: 35,

    shadowColor: '#000',
    width: '100%',
    height: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  imgStyle: {
    width: '100%',
    height: 290,
    resizeMode: 'cover',
    flex: 1,
  },
  textPoster: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  posterBox: {
    flex: 1.5,
    width: '100%',
    height: 290,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  arrowText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: -52,
    color: 'white',
  },
  headerStyle: {
    marginTop: 5,
    color: '#b9b143',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  containerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    marginTop: 10,
  },
  shadowBg: {
    backgroundColor: 'rgba(22, 22, 22, 0.175)',
    borderRadius: 5,
    padding: 5,
  },
  headerStyleB: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    marginHorizontal: 10,
    marginTop: 10,
  },
  subHeaderStyleB: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
    marginTop: 10,
  },
  textStyleB: {
    color: '#E1D9D1',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  imageStyle: {
    height: 200,
    width: 170,
    resizeMode: 'cover',
    borderRadius: 15,
    margin: 10,
  },
  posterBoxB: {
    height: 200,
    width: 170,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
});
