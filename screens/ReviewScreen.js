import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review jobs',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('settings')}
        color='rgba(0,122,255,1)'
        backgroundColor={'transparent'}
      />
    ),
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 }
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

const mapStateToProps = ({ likedJibs }) => {
  return { likedJibs }
};

export default connect(mapStateToProps)(ReviewScreen);
