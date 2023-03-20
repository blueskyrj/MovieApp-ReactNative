import {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export class SearchBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder="Search a Movie "
            style={styles.input}
            onChangeText={value => this.props.onChangeText(value)}
            value={this.props.searchValue}
          />

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.onPress()}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 5}}>Search</Text>
                <Text>
                  <FontAwesome5 name="search" style={{fontSize: 15}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}></View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.resultText}>
            Results: {this.props.totalResults}
          </Text>
        </View>
      </View>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#e6e1e1',
    borderWidth: 4,
    borderRadius: 10,
    padding: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    padding: 3,
    width: '50%',
    marginRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 0,
    paddingLeft: 8,
    backgroundColor: 'white',
    borderColor: '#ddd',
    fontSize: 16,
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
