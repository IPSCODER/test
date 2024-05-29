
import { createSlice } from "@reduxjs/toolkit";
  
export interface AuthState {
  auth: boolean;
  donorData: [];
  donorColumn: [];
  donationData: [];
  donationColumn: [];
  donationBucketData: [];
  donationBucketColumn: [];
  sidebar: boolean;
}

const initialState: AuthState = {
  auth: false,
  donorData: [],
  donorColumn: [],
  donationData: [],
  donationColumn: [],
  donationBucketData: [],
  donationBucketColumn: [],
  sidebar: false,
};

export const actionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    isSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { isSidebar } = actionsSlice.actions;

export const actionReducer = actionsSlice.reducer;