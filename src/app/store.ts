// Packages
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Reducers
import { ocrFormReducer } from "@features/ocr/form/ocrForm.slice";
import { ocrScannerReducer } from "@features/ocr/scanner/ocrScanner.slice";

export const store = configureStore({
  reducer: {
    ocrForm: ocrFormReducer,
    ocrScanner: ocrScannerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
