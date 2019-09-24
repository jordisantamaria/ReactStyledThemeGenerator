import ThemeLayout from '../../modules/theme/ThemeLayout';
import {FormStyled, Heading} from '../../components/UI/basic';
import {IState} from '../../lib/redux/rootReducer';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {ITheme} from '../../lib/redux/ThemeActions';
import Input from '../../components/UI/Forms/Input';
import {Field, Form} from 'react-final-form';
import Label from '../../components/UI/Forms/Label';
import TextStyled from '../../components/UI/basic/Text';
import * as React from 'react';
import TextArea from '../../components/UI/Forms/TextArea';
import Select from '../../components/UI/Forms/Select';

interface IProps {
  theme: ITheme;
}

const Forms = (props: IProps) => {
  return (
  <ThemeLayout>
    <Heading mb={3}>Forms</Heading>
    <Form
    onSubmit={(data) => {
      console.log(data);
    }}
    >
      {({handleSubmit}) => (
      <FormStyled
      onSubmit={handleSubmit}
      >
        <Field name={"myField"} validate={value => (isNaN(value) ? "Must be a number" : undefined)}>
          {({input, meta}) => (
          <>
            <Label htmlFor={"myField"}>Telefono</Label>
            <Input type={'phone'} id={"myField"} placeholder={"Ej: 935553344"} {...input}/>
            {meta.dirty && meta.error && (
              <TextStyled my={2} textStyle={"error"}>{meta.error}</TextStyled>
            )}
          </>
          )}
        </Field>

        <Field name={"disableInput"}>
          {({input, meta}) => (
          <>
            <Label mt={2} htmlFor={"disableInput"}>Input disabled</Label>
            <Input disabled={true} type={'phone'} id={"disableInput"} placeholder={"Ej: 935553344"} {...input}/>
            {meta.dirty && meta.error && (
            <TextStyled my={2} textStyle={"error"}>{meta.error}</TextStyled>
            )}
          </>
          )}
        </Field>

        <Field name={"textarea"}>
          {({input, meta}) => (
          <>
            <Label mt={2} htmlFor={"textarea"}>Textarea</Label>
            <TextArea rows={5} id={"textarea"} {...input}/>
            {meta.dirty && meta.error && (
            <TextStyled my={2} textStyle={"error"}>{meta.error}</TextStyled>
            )}
          </>
          )}
        </Field>

        <Field name={"select"}>
          {({input, meta}) => (
          <>
            <Label mt={2} htmlFor={"select"}>Select</Label>
            <Select id={"select"} {...input}>
              <option value="aaaa">Opcion1</option>
              <option value="aaaa">Opcion2</option>
              <option value="aaaa">Opcion3</option>
            </Select>
            {meta.dirty && meta.error && (
            <TextStyled my={2} textStyle={"error"}>{meta.error}</TextStyled>
            )}
          </>
          )}
        </Field>
      </FormStyled>
      )}
    </Form>
  </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(withRouter(Forms));
