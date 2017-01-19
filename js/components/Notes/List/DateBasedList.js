import React, {Component} from "react";
import NoteListItem from "./Item";
import {ListItem, Text} from "native-base";
import {View} from "react-native";

const DateBasedList = ({date, notes, onItemClick, onRemoveClick}) => {
  const result = [];


  result.push(
    <ListItem key="header" itemDivider>
      <Text>Date {date ? date.toLocaleString() : new Date(Date.UTC(2016, 11, 12))}</Text>
    </ListItem>
  );

  notes.forEach((t, index) => result.push(
    <NoteListItem key={t.id} onViewDetailsClick={onItemClick} onRemoveClick={onRemoveClick} {...t}/>));

  return <View>{result}</View>;
};

DateBasedList.propTypes = {
  notes: React.PropTypes.array.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};

export default DateBasedList;
