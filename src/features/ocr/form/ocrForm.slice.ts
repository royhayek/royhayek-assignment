import { createSlice } from "@reduxjs/toolkit";
import { OcrFormStateProps } from "./ocrForm.types";

const initialState: OcrFormStateProps = {
  data: null,
};

const ocrFormSlice = createSlice({
  name: "ocrForm",
  initialState,
  reducers: {
    setOcrResultData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const ocrFormActions = ocrFormSlice.actions;

export const ocrFormReducer = ocrFormSlice.reducer;

export default ocrFormSlice;
