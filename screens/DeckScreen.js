import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';

import Swipe from '../components/Swipe';
import Map from '../components/Map';
import * as actions from '../actions';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='description' size={30} color={tintColor} />
    ),
  };

  renderCard = (job) => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={job.jobtitle} wrapperStyle={{ height: 500 }}>
        <View style={{ height: 300 }}>
          <Map initialRegion={initialRegion} />
        </View>

        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>

        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title={'No More Jobs'}>
        <Button
          large
          title={'Back To Map'}
          backgroundColor='#009688'
          icon={{ name: 'my-location' }}
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp='jobkey'
        />
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 10
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results }
};

export default connect(mapStateToProps, actions)(DeckScreen);
