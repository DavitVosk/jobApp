import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: - 122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.jobs) {
      this.props.navigation.navigate('deck')
    }
  }


  onRegionChangeComplete = (region) => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };

  render() {
    if (! this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />

        <View style={styles.buttonContainer}>
          <Button
            large
            title={'Search job in this area'}
            backgroundColor='#009688'
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
};

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results }
};

export default connect(mapStateToProps, actions)(MapScreen);
