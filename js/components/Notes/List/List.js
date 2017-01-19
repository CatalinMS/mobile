import React, {Component} from "react";
import {View} from "react-native";
import DateBasedList from "./DateBasedList";
import {List} from "native-base";

const NoteList = ({notes, onItemClick, onRemoveClick}) => {
  const perDayNotes = new Map();

  notes
    .sort((t1, t2) => t1.date > t2.date  ? 1 : t1.date  < t2.date  ? -1 : 0)
    .forEach(t => {
      if (!perDayNotes.has(t.date)) {
        perDayNotes.set(t.date, []);
      }
      perDayNotes.get(t.date).push(t);
    });

  const result = [];

  perDayNotes.forEach(
    (perDay, index) => {
      result.push(<DateBasedList key={index}
                                 date={index}
                                 notes={perDay}
                                 onItemClick={onItemClick}
                                 onRemoveClick={onRemoveClick}/>)
    }
  );

  return <List>{result}</List>;
};

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};

export default NoteList;
