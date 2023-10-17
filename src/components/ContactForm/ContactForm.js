import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Error, StyledForm, Button, Label, Input } from './ContactForm.styled';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => <Error>{message}</Error>} />
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const userSchema = object({
    name: string().required(),
    number: string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
