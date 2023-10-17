import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './FilterForm/FilterForm';
import { ContactList } from './ContactList/ContactList';
import { FormContainer, Title } from './App.styled';
import { fetchContacts } from 'redux/operation';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <FormContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </FormContainer>
  );
}
