import * as React from 'react';
import {Field, Form} from 'react-final-form';
import {connect} from 'react-redux';
import {createNewList} from '../actions';

interface Iprops {
  createNewList: (name: string) => void;
}

const NewVocabList = (props: Iprops) => {

  const onSubmit = values => {
    //window.alert(JSON.stringify(values, 0, 2))
    props.createNewList(values.name)
  }

  return (
  <Form
  onSubmit={onSubmit}
  initialValues={{ name: 'larry'}}
  render={({ handleSubmit, form, submitting, pristine, values }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="listName"
      component="input"
      type="text"
      placeholder="New List"
    />
  </form>
  )}
  />
  );
};

const mapDispatchToProps = (dispatch) => ({
  createNewList: (name: string) => dispatch(createNewList(name)),
})
;

export default connect(null, mapDispatchToProps)(NewVocabList);