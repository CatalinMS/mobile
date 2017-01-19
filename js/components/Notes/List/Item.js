import React, {Component} from "react";
import {ListItem, Text, Icon} from "native-base";

const Item = ({id, title, category, body, onViewDetailsClick, onRemoveClick}) => {
  return <ListItem key={id} >
    <Icon name='md-pin' onPress={(event) => onViewDetailsClick(event, id)} style={{color: '#00C497'}}/>
    <Text onPress={(event) => onViewDetailsClick(event, id)}> {title}</Text>
    <Text note>{body}</Text>
    <Icon name='md-remove' onPress={(event) => onRemoveClick(event, id)} style={{color: '#db0638'}}/>
  </ListItem>

};

Item.propTypes = {
  notes: React.PropTypes.array,
  onViewDetailsClick: React.PropTypes.func.isRequired,
  onRemoveClick: React.PropTypes.func.isRequired
};

export default Item;
