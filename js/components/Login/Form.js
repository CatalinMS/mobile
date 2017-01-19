import React, {Component} from "react";
import {Container, Content, List, ListItem, Text, Button, InputGroup} from "native-base";
import TextField from "../common/TextField";
import {Field, reduxForm} from "redux-form";

// const validate = values => {
//   const errors = {};
//   // if (!values.email) {
//   //   errors.email = 'Required'
//   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   errors.email = 'Invalid email address'
//   //}
// // if (!values.password) {
// //   errors.password = 'Required'
// // }
//
//   return errors
// };


class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit, submitting, error} = this.props;

    return (
      <Container>
        <Content>
          <List>
            <ListItem>
                <Field name="email" component={TextField}/>
            </ListItem>

            <ListItem>
                <Field name="password" component={TextField}/>
            </ListItem>

          </List>
          <Button style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}
                  onPress={handleSubmit} title="Login" color="#841584">
          Login
          </Button>

        </Content>
      </Container>
    )
  };
}

Form.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'loginForm'
})(Form);
