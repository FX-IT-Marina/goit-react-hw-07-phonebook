import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactSlice';
import { getFilter } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: getFilter,
  },
});
