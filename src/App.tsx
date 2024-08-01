// Packages
import { RouterProvider } from "react-router-dom";

// Utils
import "./app/api";
import { router } from "@app/router";

// Component
function App() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Identity OCR Verification</h1>
      <div className="flex flex-col md:flex-row bg-white rounded-2xl p-4 md:p-10 items-center space-y-4">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
