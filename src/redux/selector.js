import { createSelector } from '@reduxjs/toolkit';

export const selectFilterValue = state => state.filter;
export const selectContacts = state => state.contacts;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, value) => {
    const normalizedValue = value.toLowerCase().trim();
    console.log('111', value);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  }
);
