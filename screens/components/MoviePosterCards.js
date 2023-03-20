import {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export class MoviePosterCards extends Component {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={styles.container}>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                {this.props.Poster == 'N/A' ? (
                  <View style={styles.posterBox}>
                    <Text style={{color: 'white', fontSize: 20}}>
                      No Poster
                    </Text>
                  </View>
                ) : (
                  <Image
                    style={styles.imageStyle}
                    source={{uri: this.props.Poster}}
                  />
                )}
              </View>

              <View style={styles.textContainer}>
                <View style={{flex: 1}}>
                  <Text style={styles.textStyle}>{this.props.Year}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={[styles.text, styles.textStyle]}>
                    {this.props.Title}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default MoviePosterCards;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  textContainer: {
    marginBottom: 50,
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
  imageStyle: {
    height: 200,
    width: 170,
    resizeMode: 'cover',
    borderRadius: 15,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  posterBox: {
    height: 200,
    width: 170,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
