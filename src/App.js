/**
 * Created by mac1 on 16/07/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {DrawerNavigator, StackNavigator} from "react-navigation";
import Home from "./pages/Home";
import {Text, TouchableOpacity} from "react-native";

const MyDrawer = DrawerNavigator({
    Home: {
        screen: Home,
    }
});

let isDrawerOpen = false;

export const MainNavigator = StackNavigator({
    Home: { screen: MyDrawer }
},
    {
        navigationOptions : ({navigation}) => ({
            title: 'Akhzar Afzal',
            headerLeft: (
                <TouchableOpacity onPress={() => {
                    if(!isDrawerOpen){
                        isDrawerOpen = true;
                        navigation.navigate('DrawerOpen');
                    }else{
                        isDrawerOpen = false;
                        navigation.navigate('DrawerClose');
                    }
                }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            )
        })
    }
);




