import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TextInput,
    TouchableOpacity,} from "react-native";
    import WebView from 'react-native-webview'
import axios from "axios";

export default class StarMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: {},
            longitude: {},
        };
    }
    
    render() {
        if (Object.keys(this.state.starMap).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <TextInput
                    style={{height:40, borderColor: 'gray', borderWidth:1}}
                    placeHolder="Enter Your Latitude"
                    placeHolderTextColor = "#ffff#000000"
                    onChangeText={(text)=>{
                      this.setState({
                        latitude:text
                        })
                    }}
                    />
                    <TextInput
                    style={{height:40, borderColor: 'gray', borderWidth:1}}
                    placeHolder="Enter Your Longitude"
                    placeHolderTextColor = "#ffff#000000"
                    onChangeText={(text)=>{
                      this.setState({
                        latitude:text
                        })
                    }}
                    />

                    <TouchableOpacity
                    onPress={()=>
                    this.getDailyDic()
                    }>
                    <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View>
                    <WebView
                    scalesPageToFit={true}
                    source={{uri:'https://virtualsky.lco.global/embed/index.html?longitude='+this.state.longitude+'&latitude='+this.state.longitude+'&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
                    style={{marginTop:20, marginBottom:20}}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    
});
