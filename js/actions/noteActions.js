import * as actionTypes from "../constants/actionTypes";
import firebase from 'firebase';

export function saveNote(note) {
  firebase.database().ref(`/notes/${note.title}`).set(note);
}

export function updateNotes(notes) {
  return function (dispatch) {
    return dispatch({type: actionTypes.UPDATE_NOTES_SUCCESS, notes});
  };
}
