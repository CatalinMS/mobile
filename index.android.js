/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Navigator, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import Communications from "react-native-communications";
import Login from "./components/Login";
import Notes from "./components/Notes/Notes";
import Note from "./components/Notes/Note";

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
    }

    onLogin(credentials) {
        console.log(credentials);
        Communications.email(`${credentials.email}`, null, null, 'Login data',
            `email: ${credentials.email} and password ${credentials.password}`);
    }

    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'login':
                return (<Login navigator={navigator} onLogin={this.onLogin}/>);
            case 'notes':
                return (<Notes navigator={navigator}/>);
            case 'note':
                return (<Note  {...route.passProps} navigator={navigator}/>);
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 'login'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
