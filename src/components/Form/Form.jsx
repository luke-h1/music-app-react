import React from 'react';
import {
  FormWrapper,
  FormTitle,
  FormInputWrap,
  FormInput,
} from './FormElements';
import {Button} from '../Button/Button';

const Form = () => { 
  return (
    <>  
    <FormWrapper>
      <FormTitle>Search for your favourite artist</FormTitle>
      <Form>
        <FormInputWrap>

        <FormInput type='text' placeholder='artist' />
        <Button type='submit' placeholder='submit'/>
        </FormInputWrap>
      </Form>
    </FormWrapper>
    </>
  )
}
export default Form;