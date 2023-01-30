import { createSlice } from '@reduxjs/toolkit';

const initialMapsState = {
  coordinates: [55.78948, 49.15655],
  boundedBy: '',
}

const mapsSlice = createSlice({
  name: 'mapsSlice',
  initialState: initialMapsState,

  reducers: {

    getCoords(state) {
      return state
    },
    changeCoords(state, action) {
      state.coordinates = action.payload;
      return state;
    },
    changeBounds(state, action) {
      state.boundedBy = action.payload;
      return state;
    },

  }
});


export const { getCoords, changeCoords, changeBounds } = mapsSlice.actions;
export default mapsSlice.reducer;