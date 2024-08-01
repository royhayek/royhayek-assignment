// Packages
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { extractFields } from "@shared/utils";
import { sendIdentity } from "./ocrScanner.api";
import { ocrFormActions } from "../form/ocrForm.slice";

// Thunks

export const sendIdentityAction = createAsyncThunk(
  "ocrScanner/sendIdentity",
  async ({ modelId, payload }: { modelId: string; payload: object }, { rejectWithValue, dispatch }) => {
    try {
      // Send the image to the api for processing
      const response = await sendIdentity(modelId, payload);
      // Extract the fields from the response
      const extractedData = extractFields(response.data.result[0].prediction);
      // Save the extracted data to the store
      dispatch(ocrFormActions.setOcrResultData(extractedData));

      return response.data;
    } catch (error) {
      console.error(error);

      // Return the error message in case of failure
      return rejectWithValue((error as Error)?.message);
    }
  }
);
