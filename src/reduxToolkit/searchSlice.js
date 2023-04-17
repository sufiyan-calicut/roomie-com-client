import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewCalendar:false,
  checkInDate: null,
  checkOutDate: null,
  searchData: null,
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
  },
});

export const { setCheckinDate, setCheckoutDate,setSearchData,setViewCalender } = searchSlice.actions;

export default searchSlice.reducer;
