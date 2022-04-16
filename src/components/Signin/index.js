import React from 'react'
import { 
        Container, 
        Form, 
        FormButton, 
        FormContent, 
        FormH1, 
        FormInput, 
        FormLabel, 
        FormWrap, 
        Icon, 
        Text
      } from './SigninElements'

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Entre em sua conta</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required/>
              <FormButton type='submit'>Continuar</FormButton>
              <Text>Esqueceu a senha?</Text>
            </Form>
          </FormContent>
        </FormWrap>

      </Container>
    </>
  )
}

export default Signin
