import { OcrFormProps } from "@shared/types/OCRForm";

export interface OcrScannerStateProps {
  data: OcrFormProps | null;
  file: File | null;
  loading: boolean;
  error: string | null;
}
