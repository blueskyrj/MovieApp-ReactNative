import {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export class LoadingActivity extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
        }}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={{color: 'white', fontSize: 20}}>
          Loading Please Wait...
        </Text>
      </View>
    );
  }
}

export default LoadingActivity;
