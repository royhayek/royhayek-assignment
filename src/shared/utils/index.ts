import { OCRResultProps } from "@shared/types/OCRResult";

/**
 * A function that extracts the fields from the OCR results
 * @param ocrResults results from the OCR API
 * @returns an object with the fields extracted from the OCR results
 */
export const extractFields = (ocrResults: OCRResultProps[]): { [key: string]: string } => {
  return ocrResults.reduce((acc, item) => {
    acc[item.label.toLowerCase()] = item.ocr_text;
    return acc;
  }, {} as { [key: string]: string });
};
