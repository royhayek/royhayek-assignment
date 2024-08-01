import axios from "axios";

// Send the image to the api for processing
export const sendIdentity = async (modelId: string, payload: object) => {
  return await axios.post(`/OCR/Model/${modelId}/LabelFile/`, payload, { headers: { Accept: "multiform/form-data" } });
};
