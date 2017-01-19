import * as actionTypes from "../constants/actionTypes";
import firebase from 'firebase';
import agent from "../api/agent";

export function login(auth) {
  console.log(auth);
  
  /*REST auth*/
  // const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
  // const query = {key: 'AIzaSyDWLhiyhgTfuJ9LCDv8dbdSQcmNSl7U3ag'};
  //
  // return agent.postWithQuery(url, query, auth);

  /*normal auth, without REST*/
  return firebase.auth().signInWithEmailAndPassword(auth.email, auth.password).then(user_data => {
    console.log('firebase login success');
    return user_data;
  }).catch((error)=> {
    if (error) {
      console.log('error', error);
      alert('Login Failed. Please try again');
    }
  });
}
