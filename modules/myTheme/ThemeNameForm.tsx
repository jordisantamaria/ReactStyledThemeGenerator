import * as React from 'react';
import {FormStyled} from '../../components/UI/basic';
import {Form} from 'react-final-form';
import InputStyled from '../../components/UI/Forms/InputStyled';

interface IProps {
  name?: string;
  onSubmit: (value) => void;
  labelStyles?: any;
  submitButton?: any;
}

const ThemeNameForm = (props: IProps) => {

  const onSubmit = (data) => {
    props.onSubmit(data)
  }

  return (
  <Form
  onSubmit={onSubmit}
  >
    {({handleSubmit}) => (
    <FormStyled
    onSubmit={handleSubmit}
    >
      <InputStyled
        name={'name'}
        placeholder={props.name}
        labelText={'Nombre del tema'}
        m={3}
        inputStyles={{marginTop: '6px'}}
        labelStyles={props.labelStyles}
      />
      {props.submitButton && props.submitButton}
    </FormStyled>
    )}
  </Form>
  );
};

export default ThemeNameForm;
