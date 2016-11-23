import React, {Component, PropTypes} from 'react';
import {View, Text, Navigator, ListView, TouchableHighlight, RecyclerViewBackedScrollView} from 'react-native';
import {notes} from "./mock";
import styles from "../../styles/styles";

class Notes extends Component {
    constructor(props) {
        super(props);
        this.pressRow = this.pressRow.bind(this);
        this.navLogin = this.navLogin.bind(this);

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

    render() {
        return (
            <View>
                <Text>Your notes</Text>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />

                <TouchableHighlight onPress={this.navLogin.bind(this)}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
            </View>
        )
    }

    _renderRow(rowData) {
        console.log("row", rowData);
        return (
            <TouchableHighlight onPress={() => console.log(rowData)}>
                <Text >
                    {rowData.title}
                </Text>
            </TouchableHighlight>
        );
    }

    pressRow() {
        console.log("asdasd");
    }
}

Notes.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Notes;