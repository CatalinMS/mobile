import  React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    TextInput,
    TouchableHighlight,
    Button,
    View,
    AsyncStorage
}from 'react-native';

import styles from "../../styles/styles";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.navNotes = this.navNotes.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    navNotes(){
        this.props.navigator.push({
            id: 'notes'
        })
    }

    login() {
        this.props.onLogin(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        placeholder={"Email Address"}
                    />
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={"Password"}
                    />

                    <Button
                        onPress={this.login}
                        title="Login"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <TouchableHighlight onPress={this.navNotes}>
                        <Text>Navigate to notes screen</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default LoginForm;