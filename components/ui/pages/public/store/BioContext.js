import { createContext } from 'react';

export const BioContext = createContext({
  bio: {},
  setBio: () => {},
});

export const initValues = {
  bio: {},
};

export const bioReducer = (state, action) => {
  if (action.type === 'SET_BIO') {
    return {
      ...state,
      bio: action.payload,
    };
  }
};
