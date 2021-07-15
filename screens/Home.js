import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/space.gif')}
          style={styles.bg}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>ISS TRACKER APP</Text>
          </View>
          <TouchableOpacity style={styles.routeCard} onPress={()=>
          this.props.navigation.navigate("DailyPic")
          }>
            <Text style={styles.routeText}>Daily Pic</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard} onPress={()=>
          this.props.navigation.navigate("StarMap")
          }>
            <Text style={styles.routeText}>Star Map</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard} onPress={()=>
          this.props.navigation.navigate("SpaceCrafts")
          }>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>3</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: 'white',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 35,
    color: 'black',
    marginTop: 5,
    
  },
  knowMore: { paddingLeft: 30, 
  color: 'red', 
  fontSize: 15 },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    left: 150,
    top: -100,
    marginTop: 70,
  },
});