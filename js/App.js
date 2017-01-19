// @flow
import React, {Component} from "react";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Login from "./components/Login";
import Notes from "./components/Notes";
import {Navigator} from "react-native";
import {AsyncStorage} from 'react-native';
import * as firebase from 'firebase';
import {Container, Header, Text} from "native-base";
import {persistStore} from 'redux-persist';

const store = configureStore();
persistStore(store, {storage: AsyncStorage});

const firebaseConfig = {
  apiKey: "AIzaSyDWLhiyhgTfuJ9LCDv8dbdSQcmNSl7U3ag",
  authDomain: "selftalk-a3edd.firebaseapp.com",
  databaseURL: "https://selftalk-a3edd.firebaseio.com",
  storageBucket: "selftalk-a3edd.appspot.com",
  messagingSenderId: "989689497414"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);

    this.state = {
      component: null
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('user_data').then((user_data_json) => {
      console.log('async user');
      let user_data = JSON.parse(user_data_json);
      if (user_data != null) {
        firebaseApp.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log('logged');
            this.setState({
              component: Notes
            });
          } else {
            console.log('not logged');
            this.setState({
              component: Login
            });
          }
        });
      }
      else {
        this.setState({
          component: Login
        });
      }
    });
  }

  navigatorRenderScene(route, navigator) {
    if (route.component) {
      return React.createElement(route.component, {
        ...this.props, ...route.passProps,
        navigator,
        route
      });
    }
  }

  render() {
    console.log("start");
    if (this.state.component == null) {
      return (
        <Container>
          <Header>
            <Text>
              Loading...
            </Text>
          </Header>
        </Container>
      );
    }
    return (
      <Provider store={store}>
        <Navigator
          ref={(nav) => {navigator = nav}}
          initialRoute={{component: this.state.component}}
          renderScene={this.navigatorRenderScene}/>
      </Provider>
    )
  }
}
