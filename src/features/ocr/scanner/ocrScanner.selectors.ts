import { RootState } from "@app/store";

export const selectOcrScannerFile = (state: RootState) => state.ocrScanner?.file;

export const selectOcrSannerLoading = (state: RootState) => state.ocrScanner?.loading;

export const selectOcrScannerError = (state: RootState) => state.ocrScanner?.error;
