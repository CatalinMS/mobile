import React from "react";
import {TextInput, Text, View} from "react-native";

const TextField = ({input, label, meta: {touched, error, warning}}) =>
  (
    <View>
      <TextInput
        placeholder={label}
        onChangeText={input.onChange}
        value={input.value}
        {...input}
      />

      {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
    </View>

  );

export default TextField;
