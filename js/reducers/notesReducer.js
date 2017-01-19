import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";
import {REHYDRATE} from 'redux-persist/constants';

export default function (state = initialState.notes, action) {
  switch (action.type) {
    case actionTypes.SAVE_NOTE_SUCCESS:
    {
      const newNote = action.note;

      //if there is an id, remove the old note identified by it.
      const newNotes = newNote.id ? [...state].filter(t=>t.id != newNote.id) : state;

      return [...newNotes, newNote];
    }

    case actionTypes.UPDATE_NOTES_SUCCESS:
    {
      return action.notes.map(t => {
        return {
          id: t.id,
          title: t.title,
          category: t.category,
          body: t.body,
          date: new Date(Date.UTC(2016, 11, 12))
        };
      });
    }

    case REHYDRATE:
      var incoming = action.payload.notes;
      console.log('incomin');
      // if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state;

    default:
      return state
  }
}

