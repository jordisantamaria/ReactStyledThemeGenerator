import * as React from 'react';
import {Field, Form} from 'react-final-form';

interface Iprops {

}

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const NewVocabList = (props: Iprops) => {
  return (
  <Form
  onSubmit={onSubmit}
  initialValues={{ stooge: 'larry', employed: false }}
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
}

export default NewVocabList;