// Packages
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Input from "@shared/components/Input";
import Button from "@shared/components/Button";

// Utils
import { useAppSelector } from "@app/store";
import { ocrFormActions } from "./ocrForm.slice";
import { selectOcrFormData } from "./ocrForm.selectors";
import { ocrScannerActions } from "../scanner/ocrScanner.slice";

// Interfaces
import { OcrFormProps } from "@shared/types/OCRForm";

// Component
const OCRForm: React.FC = () => {
  // Redux
  const data = useAppSelector(selectOcrFormData);

  const [formData, setFormData] = useState<OcrFormProps | null>(data);

  // Statics
  const navigate = useNavigate();

  // Callbacks
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the form data on input change
    setFormData(
      (prev) =>
        ({
          ...prev,
          [e.target.name]: e.target.value,
        } as OcrFormProps)
    );
  };

  const onGoBackClick = () => {
    // Empty the file
    ocrScannerActions.setFile(null);
    // Empty the data
    ocrFormActions.setOcrResultData(null);
    // Navigate back to the scanner
    navigate("/");
  };

  const onSubmitClick = () => {
    // Add the logic to submit the data
    alert(`Data to be submitted: ${JSON.stringify(formData)}`);
  };

  // Renderers
  return (
    <div className="w-full md:w-auto md:mx-auto p-4 flex flex-col">
      <h2 className="text-lg text-start mb-10">
        Please review the extracted information and make any necessary corrections.
      </h2>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        <Input name="surname" label="Surname" value={formData?.surname} onChange={onChangeHandler} />
        <Input name="given_names" label="Given Names" value={formData?.given_names} onChange={onChangeHandler} />
        <Input name="date_of_birth" label="Date of birth" value={formData?.date_of_birth} onChange={onChangeHandler} />
        <Input name="nationality" label="Nationality" value={formData?.nationality} onChange={onChangeHandler} />
        <Input name="document_no" label="Document no." value={formData?.document_no} onChange={onChangeHandler} />
        <Input name="date_of_issue" label="Date of issue" value={formData?.date_of_issue} onChange={onChangeHandler} />
        <Input
          name="date_of_expiry"
          label="Date of expiry"
          value={formData?.date_of_expiry}
          onChange={onChangeHandler}
        />
        <Input name="sex" label="Sex" value={formData?.sex} onChange={onChangeHandler} />
      </form>

      <div className="flex flex-row gap-4">
        <Button onClick={onGoBackClick} className="mt-8" secondary>
          Go back
        </Button>
        <Button onClick={onSubmitClick} className="mt-8">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default OCRForm;
