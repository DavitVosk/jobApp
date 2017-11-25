import React, { Component } from 'react';
import { Text, View, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

import Map from '../components/Map';

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
  });

  renderLikedJobs = () => {
    return this.props.likedJobs.map(job => {
      const { company, formattedRelativeTime, url, jobkey, longitude, latitude, jobtitle } = job;

      const initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      return (
        <Card key={jobkey} title={jobtitle} wrapperStyle={{ height: 250 }}>
          <Map initialRegion={initialRegion} />

          <View style={styles.detailWrapper}>
            <Text style={styles.italics}>{company}</Text>
            <Text style={styles.italics}>{formattedRelativeTime}</Text>
          </View>

          <Button
            title={'Apply Now'}
            backgroundColor='#009688'
            onPress={() => Linking.openURL(url)}
          />
        </Card>
      )
    })
  };

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    )
  }
}

const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
};

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs }
};

export default connect(mapStateToProps)(ReviewScreen);
