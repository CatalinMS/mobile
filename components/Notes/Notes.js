import React, {Component, PropTypes} from "react";
import {View, Text, Navigator, ListView, TouchableHighlight, RecyclerViewBackedScrollView} from "react-native";
import {notes} from "./mock";

class Notes extends Component {
    constructor(props) {
        super(props);
        this.navLogin = this.navLogin.bind(this);
        this.navNote = this.navNote.bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(notes)
        };
    }

    navLogin() {
        this.props.navigator.push({
            id: 'login'
        })
    }

    navNote(note) {
        this.props.navigator.push({
            id: 'note',
            passProps: {
                note: note
            }
        })
    }

    render() {
        return (
            <View>
                <Text>Your notes</Text>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData, this.navNote)}
                />

                <TouchableHighlight onPress={this.navLogin}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
            </View>
        )
    }

    _renderRow(rowData, navNote) {
        console.log("row", rowData);
        return (
            <TouchableHighlight onPress={() => navNote(rowData)}>
                <Text >
                    {rowData.title}
                </Text>
            </TouchableHighlight>
        );
    }
}

Notes.propTypes = {
};

export default Notes;