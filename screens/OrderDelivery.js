import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import {COLORS, FONTS, SIZES, GOOGLE_API_KEY, icons} from "../constants"


const OrderDelivery = () => {
    return(
        <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

    )
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

export default OrderDelivery;