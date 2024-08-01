export interface OCRResultProps {
  id: string;
  label: string;
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
  score: number;
  ocr_text: string;
  type: string;
  status: string;
  page_no: number;
  label_id: string;
  lookup_edited: boolean;
  lookup_parent_id: string;
}
