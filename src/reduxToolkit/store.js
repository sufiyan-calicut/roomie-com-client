import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import valueReducer from "./valueReducer";
import alertReducer from "./alertsReducer";
import  searchSlice  from "./searchSlice";

const store = configureStore({
  reducer: {
    value: valueReducer,
    auth: authReducer,
    alerts: alertReducer,
    search: searchSlice
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { alertsSlice } from "./alertReducer";
// import { userSlice } from "./userSlice";

// const rootReducer = combineReducers({
//   alerts: alertsSlice.reducer,
//   user: userSlice.reducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
