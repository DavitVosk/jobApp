import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review jobs',
    headerRight: <Button
      title = 'Settings' 
      onPress={() => navigation.navigate('settings')}
    />
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = {
  container: {}
};

export default ReviewScreen;
