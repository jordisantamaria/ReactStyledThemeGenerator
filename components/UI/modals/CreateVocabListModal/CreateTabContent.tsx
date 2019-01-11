import * as React from 'react';
import { Form, Field } from 'react-final-form'
import { IVocabList } from "../../../../modules/VocabListPage/reducer";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

interface Iprops {
  createNewList: (list: IVocabList) => void;
  closeModal: () => void;
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const ADD_VOCABLIST = gql`
  mutation addList($vocabList: NewVocabList!) {
    vocabListAdd(vocabList: $vocabList) {
      id
    }
  }
`;
const CreateTabContent = (props: Iprops) => {
  const onSubmit = async (values, addVocabList) => {
    // const {listName, ...listValues} = values;
    /*const list= {
      listName: listName,
      //vocabItemList: [{...listValues}]
    }*/
    console.log("On Submit create list, addVocab = ", addVocabList);
    const list = values.listName ? values.listName : 'lista sin nombre';
    const id = addVocabList({variables: {vocabList: list}});
    console.log("lista a;adida, id = ", id);
    props.closeModal();
  }
  return (
    <Mutation mutation={ADD_VOCABLIST}>
      {(addVocabList) => (
        <div onClick={() => {
          addVocabList({variables: {vocabList: {listName: 'Lista on click'}}})
        }}>
          Click me
        </div>
      )}
    </Mutation>
  );
}

export default CreateTabContent;