import {View,Text, StyleSheet} from "react-native";
import {Image} from "expo-image";
import {Border, Color, FontFamily, FontSize} from "../GlobalStyles";
function WeatherContainer() {
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
            <Text style={[styles.sunny, styles.sunnyFlexBox]}>Sunny</Text>
            <Text style={[styles.location, styles.locationLayout]}>
              Kottawa,Sri Lanka
            </Text>
          </View>
          <View style={[styles.temperature, styles.temperatureFlexBox]}>
            <Text style={[styles.text, styles.cTypo]}>27</Text>
            <Text style={[styles.c, styles.cLayout]}>°C</Text>
          </View>
          <View style={[styles.frameParent, styles.temperatureFlexBox]}>
            <View style={styles.locationParent}>
              <Text style={[styles.location1, styles.cTypo]}>16 km</Text>
              <Text style={[styles.location2, styles.locationTypo]}>
                Visibility
              </Text>
            </View>
            <View style={[styles.locationGroup, styles.locationSpaceBlock]}>
              <Text style={[styles.location1, styles.cTypo]}>48%</Text>
              <Text style={[styles.location4, styles.locationTypo]}>Humidty</Text>
            </View>
            <View style={[styles.locationContainer, styles.locationSpaceBlock]}>
              <Text style={[styles.location1, styles.cTypo]}>18 km/h</Text>
              <Text style={[styles.location4, styles.locationTypo]}>
                W. Force
              </Text>
            </View>
            <View style={[styles.frameView, styles.locationSpaceBlock]}>
              <Text style={[styles.location1, styles.cTypo]}>1009 hPa</Text>
              <Text style={[styles.location4, styles.locationTypo]}>
                Pressure
              </Text>
            </View>
          </View>
          <Image
              style={styles.sun28x1}
              contentFit="cover"
              source={require("../assets/sun-28x-1.png")}
          />
        </View>
        </View>
    );
}

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
    lineHeight: 62,
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
    left: 11,
    width: 68,
    height: 68,
    top: 24,
    position: "absolute",
  },

})