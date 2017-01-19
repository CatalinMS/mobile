/**
 * Created by fbojor on 01.12.2016.
 */
import React, {Component, PropTypes} from "react";
import {Text, Alert} from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon} from "native-base";
import {connect} from "react-redux";
import List from "./List/List";
import NoteForm from "../NoteForm";
import Login from "../Login";
import firebase from "firebase";
import Chart from "../Chart";
import {bindActionCreators} from "redux";
import {updateNotes} from "../../actions/noteActions";

class NotesContainer extends Component {
  constructor(context) {
    super(context);

    this.onNoteClick = this.onNoteClick.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onOpenChartClick = this.onOpenChartClick.bind(this);

    this.notesRef = firebase.database().ref('notes');
  }

  componentDidMount() {
    this.listenForNotes();
  }

  listenForNotes() {
    console.log('listen');
    this.notesRef.on('value', (dataSnapshot) => {
      var notes = [];

      dataSnapshot.forEach((child) => {
        notes.push({
          body: child.val().body,
          category: child.val().category,
          title: child.val().title,
          id: child.key
        });
      });
      this.props.actions.updateNotes(notes);
    });
  }

  onNoteClick(event, noteId) {
    event.preventDefault();
    console.log(noteId);
    const note = this.props.notes.find(t=>t.id === noteId);

    if (note) {
      this.props.navigator.push({
        component: NoteForm,
        passProps: {
          note
        }
      })
    }
  }

  onAddButtonClick() {
    this.props.navigator.push({
      component: NoteForm
    })
  }

  onRemoveClick(event, noteId) {
    event.preventDefault();
    console.log('remove', noteId);
    Alert.alert(
      'Remove',
      'Are you sure you want to remove this parishioner ?',
      [
        {text: 'Yes', onPress: () => this.notesRef.child(noteId).remove()},
        {text: 'Cancel', onPress: () => {}}
      ]
    )
  }

  onLogoutClick() {
    let me = this;
    firebase.auth().signOut().then(function () {
      console.log('Signed Out');
      me.props.navigator.push({
        component: Login
      })
    }, function (error) {
      console.error('Sign Out Error', error);
    });
  }

  onOpenChartClick() {
    console.log('openchart');
    this.props.navigator.push({
      component: Chart
    })
  }

  render() {
    console.log('notes');
    return (
      <Container>
          <Header>
            <Title>Notes</Title>
          </Header>

          <Content>
            {this.props.notes &&
            <List notes={this.props.notes}
                  onItemClick={this.onNoteClick}
                  onRemoveClick={this.onRemoveClick}/>}
          </Content>

          <Footer>
            <FooterTab>
              <Button transparent onPress={this.onAddButtonClick}>
                <Icon name='ios-add-circle-outline'/>
              </Button>
              <Button transparent onPress={this.onOpenChartClick}>
                <Icon name='ios-aperture'/>
              </Button>
              <Button transparent onPress={this.onLogoutClick}>
                <Icon name='ios-log-out-outline'/>
              </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

NotesContainer.propTypes = {
  notes: PropTypes.array,
  navigator: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({updateNotes}, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
