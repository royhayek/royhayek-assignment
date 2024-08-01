// Packages
import { createBrowserRouter } from "react-router-dom";

// Components
import OCRForm from "@features/ocr/form/ocrForm";
import OCRScanner from "@features/ocr/scanner/ocrScanner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OCRScanner />,
  },
  {
    path: "/form",
    element: <OCRForm />,
  },
]);
