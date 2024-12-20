import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
    },
    updateEntry: (state, action) => {
      const index = state.entries.findIndex(entry => entry.id === action.payload.id);
      if (index !== -1) {
        state.entries[index] = action.payload;
      }
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
    },
  },
});

export const { addEntry, updateEntry, deleteEntry } = entriesSlice.actions;

export default entriesSlice.reducer;

