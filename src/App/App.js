import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DEFAULT_BACKGROUND_COLOUR, MAIN_COLOUR } from '../Common/colors';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TripLog</Text>
        <Icon name="directions-bike" size={30} color={MAIN_COLOUR} style={styles.icon} />
        <View style={styles.mapWrapper}>
          <MapView
            initialRegion={{
              latitude: 47.505015,
              longitude: 19.0556322,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0121,
            }}
            style={styles.map}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOUR,
    paddingTop: '10%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: MAIN_COLOUR,
    alignSelf: 'center'
  },
  icon: {
    alignSelf: 'center'
  },
  map: {
    height: '100%',
    width: '100%',
  },
  mapWrapper: {
    flex: 1,
    marginVertical: 12
  }
});
