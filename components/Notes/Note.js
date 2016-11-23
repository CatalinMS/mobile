import React, {Component, PropTypes} from "react";
import {View, Text, Navigator, TouchableHighlight} from "react-native";

class Note extends Component {
    constructor(props) {
        super(props);
        this.navNotes = this.navNotes.bind(this);
    }

    navNotes() {
        this.props.navigator.push({
            id: 'notes'
        })
    }

    render() {
        const {note} = this.props;
        return (
            <View>
                <Text>Note: {note.title}</Text>
                <Text>Date: {note.date}</Text>
                <Text>body: {note.body}</Text>


                <TouchableHighlight onPress={this.navNotes.bind(this)}>
                    <Text>Go back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

Note.propTypes = {};

export default Note;