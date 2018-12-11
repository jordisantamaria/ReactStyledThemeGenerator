import * as React from 'react';
import { Form, Field } from 'react-final-form'
import {connect} from 'react-redux';
import { createNewList } from "../../../../modules/VocabListPage/actions";
import { IVocabList } from "../../../../modules/VocabListPage/reducer";

interface Iprops {
  createNewList: (list: IVocabList) => void;
  closeModal: () => void;
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const CreateTabContent = (props: Iprops) => {
  const onSubmit = async values => {
    await sleep(300)
    const {listName, ...listValues} = values;
    const list: IVocabList = {
      listName: listName,
      vocabItemsList: [{...listValues}]
    }
    props.createNewList(list);
    props.closeModal();
  }
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de la lista</label>
            <Field
              name="listName"
              component="input"
              type="text"
              placeholder="Nombre de la lista"
            />
          </div>
          <div>
            <label>Palabra a aprender</label>
            <Field
              name="word"
              component="input"
              type="text"
              placeholder="Palabra"
            />
          </div>
          <div>
            <label>Traducción</label>
            <Field name="translation" component="input" type="text" />
          </div>
          <div>
            <label>Pronunciación</label>
            <Field name="pronunciation" component="input" type="text" />
          </div>
          <div>
            <label>Asociación</label>
            <Field name="association" component="input" type="text" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    createNewList: (list: IVocabList) => {
      dispatch(createNewList(list))
    }
  }
}
export default connect(null, mapDispatchToProps)(CreateTabContent);