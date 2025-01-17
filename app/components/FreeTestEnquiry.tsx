import React, { useState } from "react";
import axiosInstance from "../modules/admin/utils/axiosinstance";

interface FreeTestPopupProps {
  onClose: () => void; // Function to close the popup
}

const FreeTestPopup: React.FC<FreeTestPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    contactNumber: "",
    email: "",
    notes: "",
    type: "freetest"
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Update form data state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setStatusMessage(""); // Clear previous messages
    try {
      const response = await axiosInstance.post("/v3/api/inquiries", formData);
      setStatusMessage("Your free test request has been submitted successfully!");
      setFormData({
        name: "",
        companyName: "",
        contactNumber: "",
        email: "",
        notes: "",
        type: "freetest"
      });
    } catch (error) {
      setStatusMessage("Failed to submit your request. Please try again later.");
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl flex w-full max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-orange-200"
        >
          X
        </button>

        {/* Form Section */}
        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="notes" // Fixed the name attribute here
                value={formData.notes}
                onChange={handleChange}
                placeholder="Note"
                className="w-full p-2 border border-gray-300 rounded h-24"
              ></textarea>
            </div>

            {/* Submit Button with Loading Indicator */}
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-6 w-full bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            
            {/* Loading Indicator */}
            {isLoading && <p className="mt-4 text-center text-gray-500">Please wait...</p>}
            
            {/* Status Message */}
            {statusMessage && (
              <p className={`mt-4 text-sm text-center ${statusMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="w-1/2 bg-white rounded-r-lg flex items-center justify-center">
          <img
            src="/images/3.svg"
            alt="Communication illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeTestPopup;
