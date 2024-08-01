// Packages
import { createSlice } from "@reduxjs/toolkit";

// Utils
import { sendIdentityAction } from "./ocrScanner.thunks";
import { OcrScannerStateProps } from "./ocrScanner.types";

const initialState: OcrScannerStateProps = {
  data: null,
  file: null,
  error: null,
  loading: false,
};

const ocrScannerSlice = createSlice({
  name: "ocrScanner",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendIdentityAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendIdentityAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendIdentityAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const ocrScannerActions = ocrScannerSlice.actions;

export const ocrScannerReducer = ocrScannerSlice.reducer;

export default ocrScannerSlice;
