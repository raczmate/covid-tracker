import React from 'react';

export const countriesList = [];

export function countryReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      if (state.includes(action.payload)) return [...state];
      return [...state, action.payload];
    }
    case 'REMOVE': {
      if (state.includes(action.payload)) {
        const filtered = state.filter(
          (country) => country.Country !== action.payload.Country
        );
        return filtered;
      }
      return [...state];
    }
    case 'RESET': {
      state.length = 0;
      return [...state];
    }
    default: {
      throw new Error(`Helytelen művelet!`);
    }
  }
}
