import * as React from 'react';
import { Form, Field } from 'react-final-form'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from 'final-form-arrays'

interface Iprops {
  closeModal: () => void;
}
const required = value => (value ? undefined : 'Required')

const ADD_VOCABLIST = gql`
  mutation addList($vocabList: NewVocabList!) {
    vocabListAdd(vocabList: $vocabList) {
      id
    }
  }
`;
const CreateTabContent = (props: Iprops) => {
  return (
    <Mutation mutation={ADD_VOCABLIST}>
      {(addVocabList) => (
        <React.Fragment>
          <Form
            onSubmit={({listName, vocabItemList}: any) => {
              const list = {vocabList: {
                  listName,
                  vocabItemList,
                }};
              console.log("list to add = ", list);
              addVocabList({variables: list});
              props.closeModal();
            }}
            mutators={{...arrayMutators}}
          >
            {({handleSubmit}) => (
              <form onSubmit={handleSubmit.bind(addVocabList)}>
                <div>
                  <label>List Name</label>
                  <Field
                    name={"listName"}
                    component="input"
                    placeholder="List Name"
                    validate={required}
                  />
                </div>
                <FieldArray name={'vocabItemsList'}>
                  {({fields}) => (
                    <div>
                      {fields.map((name, index) => (
                        <div key={name}>
                          <label>Palabra. #{index + 1}</label>
                          <div>
                            <label>Palabra a aprender</label>
                            <Field
                              name={`${name}.word`}
                              component="input"
                              type="text"
                              placeholder="Palabra"
                            />
                          </div>
                          <div>
                            <label>Traducción</label>
                            <Field name={`${name}.translation`} component="input" type="text" />
                          </div>
                          <div>
                            <label>Pronunciación</label>
                            <Field name={`${name}.pronunciation`} component="input" type="text" />
                          </div>
                          <div>
                            <label>Asociación</label>
                            <Field name={`${name}.association`} component="input" type="text" />
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => fields.push({})}>
                        Añadir palabra
                      </button>
                    </div>
                  )}
                </FieldArray>
                <div>
                  <button type="submit">Submit</button>
                </div>x
              </form>
            )}
          </Form>
          <div onClick={() => {
            addVocabList({variables: {vocabList: {listName: 'Lista on click'}}})
          }}>
            Click me
          </div>
        </React.Fragment>
      )}
    </Mutation>
  );
}

export default CreateTabContent;