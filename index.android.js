/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import Communications from 'react-native-communications';
import Login from "./components/Login";
import Notes from "./components/Notes";
import styles from "./styles/styles";

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.navigatorRenderScene = this.navigatorRenderScene.bind(this);

    }

    onLogin(data) {
        console.log(data);
        Communications.email(`${data.email}`, null, null, 'Login data', `email: ${data.email} and password ${data.password}`);
    }

    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'login':
                return (<Login navigator={navigator} onLogin={this.onLogin}/>);
            case 'notes':
                return (<Notes navigator={navigator} title="notes"/>);
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
