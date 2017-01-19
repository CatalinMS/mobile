import React, {Component} from "react";
import TextField from "../common/TextField";
import DatePicker from "../common/DatePicker";
import {Container, Content, List, ListItem, Text, Picker, Button} from "native-base";
import {Field, reduxForm} from "redux-form";

const Item = Picker.Item;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentWillMount() {
    this.props.initialize(this.props.initialValues);
  }

  renderCategories() {
    return this.props.categories.map(c => <Item key={c} label={c} value={c}/>)
  };

  render() {
    const {handleSubmit, submitting, error, categories} = this.props;
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Field name="category" component={(props) =>
                <Picker
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={props.input.value}
                  onValueChange={(value) => props.input.onChange(value)}>
                  {this.renderCategories(categories)}
                </Picker>
              }/>
            </ListItem>

            <ListItem>
              <Field name="title" label="Title" component={TextField}/>
            </ListItem>

            <ListItem>
              <Field name="body" label="Body" component={TextField}/>
            </ListItem>

            <ListItem>
              <Field name="date" component={DatePicker}/>
            </ListItem>
          </List>
          <Button style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} onPress={handleSubmit}
                  color="#841584">Save</Button>
          <Text>{error}</Text>
        </Content>
      </Container>
    )
  }
}

Form.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'noteForm',
  destroyOnUnmount: false,
})(Form);
