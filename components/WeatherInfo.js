import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {colors} from '../utils/index'

const {PRIMARY_COLOR,SECONDARY_COLOR} = colors

export default function WeatherInfo({currentWeather}) {
   const {main: {temp},
   weather: [details],
   name
} = currentWeather
const {icon, main, description } = details

const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.weatherInfo}>
     <Text>{name}</Text>
     <Image style={styles.weatherIcon} source={{uri: iconUrl}} />
     <Text>{temp}</Text>
     <Text style={styles.weatherDescription}>{description}</Text>
     <Text>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    },
    weatherDescription: {
      textTransform: 'capitalize'
    },
    weatherIcon: {
        width: 100,
        height: 100
    }
}) 