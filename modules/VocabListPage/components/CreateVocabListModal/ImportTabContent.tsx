import * as React from "react";
import { Form, Field } from "react-final-form";
import { Mutation } from "react-apollo";
import arrayMutators from "final-form-arrays";
import { GET_LIST_NAMES_QUERY } from "../../../../pages";
import { ADD_VOCABLIST, required } from "./CreateTabContent";
import { Box, Text } from "../../../../components/UI/basic";
import FormStyled from "../../../../components/UI/basic/FormStyled";

interface Iprops {
  closeModal: () => void;
}

const ImportTabContent = (props: Iprops) => {
  const convertStringToVocabItems = content => {
    const rows = content.split("\n");
    return rows.map(row => {
      const columns = row.split("\t");
      return {
        word: columns[0],
        pronunciation: columns[1],
        translation: columns[2],
        association: columns.length > 3 ? columns[3] : ""
      };
    });
  };
  return (
    <Mutation
      mutation={ADD_VOCABLIST}
      update={(cache, { data }) => {
        //cuando no son datos puros, ejemplo listas, hay que añadir manualmente los nuevos datos a la cache de graphql
        const { vocabLists } = cache.readQuery({ query: GET_LIST_NAMES_QUERY });
        cache.writeQuery({
          query: GET_LIST_NAMES_QUERY,
          data: { vocabLists: vocabLists.concat([data.vocabListAdd]) }
        });
      }}
    >
      {addVocabList => (
        <React.Fragment>
          <Form
            onSubmit={({ listName, content }: any) => {
              const VocabItems = convertStringToVocabItems(content);
              const list = {
                vocabList: {
                  listName,
                  VocabItems
                }
              };
              addVocabList({ variables: list });
              props.closeModal();
            }}
            mutators={{ ...arrayMutators }}
          >
            {({ handleSubmit }) => (
              <FormStyled
                width={1}
                m={2}
                onSubmit={handleSubmit.bind(addVocabList)}
              >
                <div>
                  <label>List Name</label>
                  <Field
                    name={"listName"}
                    component="input"
                    placeholder="List Name"
                    validate={required}
                  />
                </div>
                <Box width={1} mt={2}>
                  <Text mb={2}>Contenido a Importar</Text>
                  <Field
                    name={"content"}
                    component="textarea"
                    placeholder="content"
                    validate={required}
                    style={{ width: "100%", height: "300px" }}
                  />
                </Box>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </FormStyled>
            )}
          </Form>
        </React.Fragment>
      )}
    </Mutation>
  );
};

export default ImportTabContent;
