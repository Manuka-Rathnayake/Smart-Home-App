import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import * as Location from 'expo-location';

const openWeatherKey = '22aabb7d06dd6428559098d9c7a15961';

const WeatherContainer = () => {

  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(null);

  const loadForecast = async () => {
    setRefreshing(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    //const response = await fetch(`${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${openWeatherKey}`);
    const data = await response.json();
    //console.log(data);

    if (!response.ok) {
      Alert.alert('Something went wrong');
    } else {
      setForecast(data);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    loadForecast().catch(console.error);
  }, []);

  //console.log('forecast',!forecast?.weather?.[0] ,forecast);

  if (!forecast ||!forecast?.main || !forecast?.visibility || !forecast?.wind  || !forecast?.name || !forecast?.weather?.[0]) {
    return (
        <View>
          <Text style={{color: 'white'}}>Loading...</Text>
        </View>
    );
  }

  const weather = forecast.weather[0];
  const current = forecast.main;
  const vis = forecast.visibility;
  const wind = forecast.wind;
  const country = forecast.name;
  console.log('info', weather);


  return (
      <View style={{ flex: 1 }}>
        <View style={styles.bgParent}>
          <Image
              style={styles.bgIcon}
              contentFit="cover"
              source={require("../assets/bg.png")}
          />
          <View style={[styles.weatherLocation, styles.hiManukaWrapperLayout]}>
            <View style={styles.weatherEmoji}>
              <Image
                  style={[styles.sunnyWindyIcon, styles.homeDarkChildLayout]}
                  contentFit="cover"
                  source={require("../assets/sunny-windy1.png")}
              />
            </View>
              <Text style={[styles.sunny, styles.sunnyFlexBox]}>{weather.main}</Text>
              <Text style={[styles.location, styles.locationLayout]}>
                {country}
              </Text>
            </View>
            <View style={[styles.temperature, styles.temperatureFlexBox]}>
              <Text style={[styles.text, styles.cTypo]}>{Math.floor(current.temp - 273.15)}</Text>
              <Text style={[styles.c, styles.cLayout]}>°C</Text>
            </View>
            <View style={[styles.frameParent, styles.temperatureFlexBox]}>
              <View style={styles.locationParent}>
                <Text style={[styles.location1, styles.cTypo]}>{Math.floor(vis/1000)} km</Text>
                <Text style={[styles.location2, styles.locationTypo]}>
                  Visibility
                </Text>
              </View>
              <View style={[styles.locationGroup, styles.locationSpaceBlock]}>
                <Text style={[styles.location1, styles.cTypo]}>{current.humidity}%</Text>
                <Text style={[styles.location4, styles.locationTypo]}>Humidity</Text>
              </View>
              <View style={[styles.locationContainer, styles.locationSpaceBlock]}>
                <Text style={[styles.location1, styles.cTypo]}>{Math.floor(wind.speed * 3.6)} km/h</Text>
                <Text style={[styles.location4, styles.locationTypo]}>
                  W. Force
                </Text>
              </View>
              <View style={[styles.frameView, styles.locationSpaceBlock]}>
                <Text style={[styles.location1, styles.cTypo]}>{current.pressure} hPa</Text>
                <Text style={[styles.location4, styles.locationTypo]}>
                  Pressure
                </Text>
              </View>
            </View>
            <Image
                style={styles.sun28x1}
                contentFit="cover"
                source = {{
                  uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
                }}
            />
        </View>
      </View>
  );
};


export default WeatherContainer;

const styles = StyleSheet.create({
  bgParent: {
    top: 101,
    height: 156,
    width: 328,
    left: 32,
    position: "absolute",
    borderRadius:15,
    backgroundColor: '#410292',
  },
  bgIcon: {
    opacity: 0.5,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    height: 156,
    width: 328,
    position: "absolute",
  },
  weatherLocation: {
    left: 16,
    width: 171,
    top: 24,
  },
  hiManukaWrapperLayout: {
    height: 60,
    position: "absolute",
  },
  weatherEmoji: {
    width: 66,
    left: 0,
    top: 0,
    height: 60,
    position: "absolute",
  },
  sunnyWindyIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    display: "none",
    width: "100%",
    maxWidth: "100%",
  },
  sunny: {
    top: 9,
    left: 72,
    lineHeight: 26,
    textTransform: "uppercase",
    width: 96,
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.heading5_size,
    color: Color.white,
    fontFamily: FontFamily.mediumTextBold,
    fontWeight: "600",
    position: "absolute",
  },
  homeDarkChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sunnyFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  locationLayout: {
    width: 114,
    position: "absolute",
  },
  location: {
    top: 32,
    left: 74,
    fontSize: FontSize.extraSmallText_size,
    fontFamily: FontFamily.extraSmallText,
    width: 114,
    lineHeight: 22,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.white,
  },
  temperature: {
    left: 218,
    height: 62,
    top: 24,
  },
  temperatureFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.heading1_size,
    lineHeight: 60,
    textAlign: "center",
    color: Color.white,
  },
  c: {
    fontFamily: FontFamily.smallTextBold,
    fontWeight: "700",
    fontSize: FontSize.heading5_size,
  },
  cTypo: {
    fontFamily: FontFamily.smallTextBold,
    fontWeight: "700",
  },
  cLayout: {
    lineHeight: 32,
    textAlign: "left",
    color: Color.white,
  },
  frameParent: {
    top: 100,
    left: 14,
    height: 40,
  },
  locationParent: {
    width: 41,
    height: 39,
    alignItems: "center",
  },
  location1: {
    fontSize: FontSize.smallTextBold_size,
    lineHeight: 22,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
  },
  location2: {
    textAlign: "left",
  },
  locationTypo: {
    marginTop: -5,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.extraSmallText,
    lineHeight: 22,
    color: Color.white,
  },
  locationGroup: {
    width: 61,
    alignItems: "center",
  },
  locationSpaceBlock: {
    marginLeft: 24,
    height: 39,
  },
  locationContainer: {
    justifyContent: "flex-end",
    width: 61,
  },
  location4: {
    justifyContent: "center",
    width: 61,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  frameView: {
    width: 65,
    alignItems: "center",
  },
  sun28x1: {
    left: 0,
    width: 90,
    height: 90,
    top: 7,
    position: "absolute",
  },

})