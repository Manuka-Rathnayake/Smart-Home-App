import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import WeatherContainer from "../components/WeatherContainer";
import { ref, set, update,onValue } from "firebase/database";
import { db } from "../firebaseConfig";
const HomeDark = () => {
  const [buttons0SwitchValueState, setButtons0SwitchValueState] = useState();
  const [buttons1SwitchValueState, setButtons1SwitchValueState] = useState();
  const [buttons2SwitchValueState, setButtons2SwitchValueState] = useState();
  const [buttons3SwitchValueState, setButtons3SwitchValueState] = useState();
  const [buttons4SwitchValueState, setButtons4SwitchValueState] = useState();
  const [buttons5SwitchValueState, setButtons5SwitchValueState] = useState();
  const [buttons6SwitchValueState, setButtons6SwitchValueState] = useState();
  const [buttons7SwitchValueState, setButtons7SwitchValueState] = useState();

  useEffect(() =>
  {
    const SwitchRef = ref(db, 'Switches/');
    onValue(SwitchRef, (snapshot) => {
      const data = snapshot.val();
      if(data) {
        setButtons0SwitchValueState(data.Switch0);
        setButtons1SwitchValueState(data.Switch1);
        setButtons2SwitchValueState(data.Switch2);
        setButtons3SwitchValueState(data.Switch3);
        setButtons4SwitchValueState(data.Switch4);
        setButtons5SwitchValueState(data.Switch5);
        setButtons6SwitchValueState(data.Switch6);
        setButtons7SwitchValueState(data.Switch7);
      }
      });
  },[])
  const handleSwitch0Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch0: newValue,
    });
    setButtons0SwitchValueState(newValue);
  }

  const handleSwitch1Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch1: newValue,
    });
    setButtons1SwitchValueState(newValue);
  }
  const handleSwitch2Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch2: newValue,
    });
    setButtons2SwitchValueState(newValue);
  }
  const handleSwitch3Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch3: newValue,
    });
    setButtons3SwitchValueState(newValue);
  }
  const handleSwitch4Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch4: newValue,
    });
    setButtons4SwitchValueState(newValue);
  }
  const handleSwitch5Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch5: newValue,
    });
    setButtons5SwitchValueState(newValue);
  }
  const handleSwitch6Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch6: newValue,
    });
    setButtons6SwitchValueState(newValue);
  }
  const handleSwitch7Change = (newValue) => {
    update(ref(db, 'Switches/'), {
      Switch7: newValue,
    });
    setButtons7SwitchValueState(newValue);
  }


  return (
    <View style={styles.homeDark}>
      <View style={[styles.hiManukaWrapper, styles.hiManukaWrapperLayout]}>
        <Text style={[styles.hiManuka, styles.sunnyTypo]}>Hi, Manuka!</Text>
      </View>
      <WeatherContainer />
      <Image
        style={[styles.homeDarkChild, styles.homeDarkChildLayout]}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <View style={[styles.box, styles.boxLayout1]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Bulb</Text>
        </View>
          <Switch
              style={styles.buttons}
              value={buttons0SwitchValueState}
              onValueChange={handleSwitch0Change}
              thumbColor="#fff"
              trackColor={{ false: "#939393", true: "#8132E6" }}
          />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant3.png")}
        />
      </View>
      <View style={[styles.box1, styles.boxLayout1]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Lamp</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons1SwitchValueState}
          onValueChange={handleSwitch1Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant4.png")}
        />
      </View>
      <View style={[styles.box2, styles.boxLayout1]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Power</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons2SwitchValueState}
          onValueChange={handleSwitch2Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant2.png")}
        />
      </View>
      <View style={[styles.box3, styles.boxLayout1]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Bulb</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons3SwitchValueState}
          onValueChange={handleSwitch3Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant5.png")}
        />
      </View>
      <View style={[styles.box4, styles.boxLayout]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Ceiling fan</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons4SwitchValueState}
          onValueChange={handleSwitch4Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1default.png")}
        />
      </View>
      <View style={[styles.box5, styles.boxLayout]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Curtain</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons5SwitchValueState}
          onValueChange={handleSwitch5Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant6.png")}
        />
      </View>
      <View style={[styles.box6, styles.boxLayout]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Bulb</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons6SwitchValueState}
          onValueChange={handleSwitch6Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant5.png")}
        />
      </View>
      <View style={[styles.box7, styles.boxLayout]}>
        <View style={[styles.ceilingFanWrapper, styles.locationLayout]}>
          <Text style={[styles.ceilingFan, styles.cLayout]}>Bulb</Text>
        </View>
        <Switch
          style={styles.buttons}
          value={buttons7SwitchValueState}
          onValueChange={handleSwitch7Change}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#8132E6" }}
        />
        <Image
          style={styles.boxChild}
          contentFit="cover"
          source={require("../assets/property-1variant5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hiManukaWrapperLayout: {
    height: 60,
    position: "absolute",
  },
  sunnyTypo: {
    fontFamily: FontFamily.mediumTextBold,
    fontWeight: "600",
    color: Color.white,
  },
  homeDarkChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  boxLayout1: {
    height: 120,
    width: 160,
    backgroundColor: Color.primaryDark,
    borderRadius: Border.br_base,
    left: 32,
    position: "absolute",
    marginTop:5,
  },
  boxLayout: {
    left: 198,
    height: 120,
    width: 160,
    backgroundColor: Color.primaryDark,
    borderRadius: Border.br_base,
    position: "absolute",
    marginTop:5,
  },
  locationLayout: {
    width: 114,
    position: "absolute",
  },
  hiManuka: {
    fontSize: FontSize.heading4_size,
    lineHeight: 58,
    width: 221,
    height: 40,
    textAlign: "center",
    color: Color.white,
  },
  hiManukaWrapper: {
    top: 20,
    width: 267,
    left: 24,
    height: 60,
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
  cLayout: {
    lineHeight: 32,
    textAlign: "left",
    color: Color.white,
  },
  text: {
    fontSize: FontSize.heading1_size,
    lineHeight: 62,
    textAlign: "center",
    color: Color.white,
  },
  homeDarkChild: {
    height: 70,
    width: 70,
    top: 13,
    right: "8.78%",
    bottom: "90.56%",
    left: 288,
  },
  ceilingFan: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 120,
  },
  ceilingFanWrapper: {
    top: 70,
    left: 23,
  },
  buttons: {
    top: 21,
    left: 104,
    width: 36,
    height: 20,
    position: "absolute",
  },
  boxChild: {
    top: 18,
    left: 20,
    width: 42,
    height: 42,
    position: "absolute",
  },
  box: {
    top: 274,
  },
  box1: {
    top: 408,
  },
  box2: {
    top: 542,
  },
  box3: {
    top: 676,
  },
  box4: {
    top: 274,
  },
  box5: {
    top: 408,
  },
  box6: {
    top: 542,
  },
  box7: {
    top: 676,
  },
  homeDark: {
    backgroundColor: "#000",
    flex: 1,
    height: 816,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeDark;
