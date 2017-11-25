import React, { Component } from 'react';
import { Platform } from 'react-native';

import { MapView } from 'expo';

const Map = ({ initialRegion }) => {
  return (
    <MapView
      scrollEnabled={false}
      style={{ flex: 1 }}
      cacheEnabled={Platform.OS === 'android' ? true : false}
      initialRegion={initialRegion}
    />
  )
};

export default Map;