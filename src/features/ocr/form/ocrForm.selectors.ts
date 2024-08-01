import { RootState } from "@app/store";

export const selectOcrFormData = (state: RootState) => state.ocrForm?.data;
