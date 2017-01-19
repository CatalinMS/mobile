import React from "react";
import {DatePickerAndroid, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";
import {Button} from "native-base";

class DatePicker extends React.Component {
  showPicker = async(options) => {
    const {action, year, month, day} = await DatePickerAndroid.open(options);
    if (action !== DatePickerAndroid.dismissedAction) {
      var date = new Date(year, month, day);
      this.props.input.onChange(date);
    }
  };

  render() {
    return (
      <Button onPress={this.showPicker.bind(this, {
          date: this.props.input.value ? this.props.input.value : new Date(),
          maxDate: new Date()
        }
      )}>
        Select date
      </Button>
    );
  }
}

DatePicker.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default  DatePicker;
