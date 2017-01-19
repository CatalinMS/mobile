import React from "react";
import {StyleSheet} from "react-native";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    margin: 10,
    padding: 10,
    height: 50,
    fontWeight: '800',
  },
  transparent_button: {
    marginTop: 10,
    padding: 15
  },
  transparent_button_text: {
    color: '#0485A9',
    fontSize: 16
  },
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  }
});
