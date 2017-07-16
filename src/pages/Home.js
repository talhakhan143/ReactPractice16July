/**
 * Created by mac1 on 16/07/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, TextInput
} from 'react-native';

export default class TalhaReactNative extends Component {

    static navigationOptions = {
        title: 'Welcome',
        headerBackTitle: "BackHoJa"
    };

    state={
      mtText: ""
    };

    simple(){
        alert("Heloo world")
    }

    render() {
        return (
            <View style={{
                backgroundColor: "#000",
                flex: 1
            }}>

                <TouchableOpacity style={{
                    flex: 1,
                    backgroundColor: "#0F0"
                }} onPress={()=> {
                    alert(this.state.mtText)
                }}>

                <View style={{
                    flex: 1,
                    backgroundColor: "#0F0"
                }}/>
                </TouchableOpacity>
                <Text style={{color:"#fff"}}>{this.state.mtText}</Text>
                <View style={{
                    flex: 1,
                    backgroundColor: "#00F",
                    flexDirection: "row"
                }}>

                    <View style={{
                        flex: 1,
                        backgroundColor: "#FFF"
                    }}>

                        <TextInput placeholder="Enter Your Fucking Name" style={{
                            backgroundColor: "#eaeaea",
                            padding: 10
                        }}
                        onChangeText={(newText)=>{
                            this.setState({
                                mtText: newText
                            })
                        }}
                        />


                    </View>

                </View>
            </View>
        );
    }
}



