import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class SettingScreen extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.likedJobs !== this.props.likedJobs) {
      return this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <View>
        <Button
          large
          title={'Reset the liked jobs '}
          backgroundColor='#009688'
          icon={{ name: 'delete-forever' }}
          onPress={() => this.props.deleteLikedJobs()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs }
};

export default connect(mapStateToProps, actions)(SettingScreen);
