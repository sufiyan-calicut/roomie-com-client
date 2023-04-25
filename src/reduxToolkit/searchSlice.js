import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewCalendar: false,
  checkInDate: null,
  checkOutDate: null,
  searchData: null,
  rooms: 1,
  guest: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCheckinDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckoutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    setViewCalender: (state, action) => {
      state.viewCalendar = action.payload;
    },
    addNewRoom: (state) => {
      state.rooms = state.rooms + 1;
    },
    deleteRoom: (state) => {
      state.rooms = state.rooms - 1;
    },
    addNewGuest: (state) => {
      state.guest = state.guest + 1;
    },
    removeGuest: (state) => {
      state.guest = state.guest - 1;
    },
  },
});

export const { setCheckinDate, setCheckoutDate, setSearchData, setViewCalender, addNewRoom, deleteRoom, addNewGuest, removeGuest } =
  searchSlice.actions;

export default searchSlice.reducer;
