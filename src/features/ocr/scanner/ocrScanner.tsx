// Packages
import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

// Components
import Button from "@shared/components/Button";

// Utils
import idPreview from "@shared/assets/id-preview.png";
import { ocrScannerActions } from "./ocrScanner.slice";
import { sendIdentityAction } from "./ocrScanner.thunks";
import { useAppDispatch, useAppSelector } from "@app/store";
import scanningLottie from "@shared/assets/scanning-lottie.json";
import { selectOcrSannerLoading, selectOcrScannerError, selectOcrScannerFile } from "./ocrScanner.selectors";

// Constants
const OCRModelId = import.meta.env.VITE_OCR_MODEL_ID;

// Component
const OCRScanner: React.FC = () => {
  // Redux
  const dispatch = useAppDispatch();

  const file = useAppSelector(selectOcrScannerFile);
  const isLoading = useAppSelector(selectOcrSannerLoading);
  const error = useAppSelector(selectOcrScannerError);

  // Statics
  const navigate = useNavigate();

  const uploadedImage = file && file.size > 0 && URL.createObjectURL(file);

  // Callbacks
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Set the file in the store
      dispatch(ocrScannerActions.setFile(e.target.files[0]));
    }
  };

  const onFileDelete = () => {
    dispatch(ocrScannerActions.setFile(null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    try {
      // Create a form data object holding the image
      const formdata = new FormData();
      formdata.append("file", file);

      // Send the image to the api for processing
      const response = await dispatch(sendIdentityAction({ modelId: OCRModelId, payload: formdata }));

      // If the response is successful, navigate to the form page
      if (response.payload.result) {
        navigate("/form");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full md:w-auto md:mx-auto p-4 justify-center items-center">
      <h2 className="text-xl font-semibold">Upload your identity document to proceed</h2>
      {uploadedImage ? (
        <img src={uploadedImage} alt={file.name} width={180} className="m-auto py-10" />
      ) : (
        <img src={idPreview} alt="ID Preview" width={200} className="m-auto" />
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <div className="flex flex-row items-center gap-2">
            <label
              htmlFor="fileInput"
              className="block w-full text-center px-4 py-4 text-sm text-black border-gray-400 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {file ? file.name : "Choose Image"}
            </label>
            {uploadedImage && (
              <h6 onClick={onFileDelete} className="cursor-pointer text-red-600">
                Delete
              </h6>
            )}
          </div>
          <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <h6 className="text-xs text-gray-500 text-start mx-1 mt-2 mb-6">
            Ensure the image is clear and all text is readable
          </h6>
        </div>

        <Button type="submit" loading={isLoading} disabled={!file || isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </Button>
      </form>

      {error && <div className="mt-4 text-red-500">{error}</div>}

      {isLoading && (
        <dialog className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-75 rounded-2xl shadow-2xl p-8 max-w-md mx-auto flex-col">
          <Lottie animationData={scanningLottie} className="h-40" loop />
          <h1 className="mt-2">Scanning, please wait...</h1>
        </dialog>
      )}
    </div>
  );
};

export default OCRScanner;
