import React, { Component } from 'react';
import { Text, View, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

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
      const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      const { company, formattedRelativeTime, url, jobkey } = job;

      return (
        <Card key={jobkey} wrapperStyle={{ height: 200 }}>
          <View style={{ flex: 1 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android' ? true : false}
              initialRegion={initialRegion}
            />
          </View>
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
