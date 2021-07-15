import React, { Component } from 'react';
import { Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert, Linking } from 'react-native';
import axios from 'axios'
export default class DailyPicScreen extends Component {

  constructor(props) {
        super(props);
        this.state = {
            dailypics: {}
        };
    }
    
      componentDidMount() {
        this.getDailyPics()
        }
    
  getDailyPics = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=fk47WRAPVLTAY3PHeOdeJV3hSfYUIC6HssdEmt1v")
            .then(response => {
                this.setState({ dailypics: response.data
                })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    render() {
      return(
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <Text style = {styles.routeText}> Astromomy picture of the day</Text>
        <Text style = {styles.routeText}>{this.state.dailypics.title}</Text>
        <TouchableOpacity style = {styles.listContainer}
        onPress={() => Linking.openURL(this.state.dailypics.url).catch(err => console.error("Couldn't load page"))}
        >
        <View style={styles.iconContainer}>
        <Image  source={require("../assets/play-video.png")} style={{width: 50, height: 50}}></Image>
        </View>
        </TouchableOpacity>
        <Text style = {styles.infoText}>{this.state.dailypics.explanation}</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    listContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
});