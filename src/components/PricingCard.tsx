import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const PricingCard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const modeClasses = darkMode
    ? {
        bg: "bg-[#111827]",
        text: "text-[#a5b4fc]",
        buttonBg: "bg-gray-300",
        buttonText: "text-gray-900",
        tableBg: "bg-[#1E293B]",
        tableText: "text-[#d1d5db]",
        headerBg: "bg-[#6366F1]",
        borderColor: "border-[#374151]",
        lightText: "text-[#f9fafb]",
      }
    : {
        bg: "bg-gray-100",
        text: "text-black",
        buttonBg: "bg-gray-900",
        buttonText: "text-white",
        tableBg: "bg-gray-100",
        tableText: "text-gray-700",
        headerBg: "text-white",
        borderColor: "border-gray-300",
        lightText: "text-gray-900",
      };

  return (
    <section className={`min-h-screen flex items-center justify-center p-4 ${modeClasses.bg}`}>
      <div className={`p-8 border ${modeClasses.borderColor} rounded-lg shadow-lg max-w-4xl w-full`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-2xl font-semibold ${modeClasses.text}`}>
            API Pricing
          </h2>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded ${modeClasses.buttonBg} ${modeClasses.buttonText}`}
          >
            {darkMode ? <MdDarkMode /> : <MdLightMode />  }
          </button>
        </div>
        <p className={`mt-2 font-semibold text-[16px] ${modeClasses.tableText}`}>
          Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
        </p>
        <div className={`my-4 rounded-lg ${modeClasses.tableBg}`}>
          <table className="min-w-full text-left">
            <thead className={`${modeClasses.headerBg} rounded-lg`}>
              <tr className={modeClasses.tableText}>
                <th className={`px-4 py-2 border ${modeClasses.borderColor}`}>API</th>
                <th className={`px-4 py-2 border ${modeClasses.borderColor}`}>Model</th>
                <th className={`px-4 py-2 border ${modeClasses.borderColor}`}>Price Per 1K Tokens</th>
              </tr>
            </thead>
            <tbody>
              {[
                { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
                { api: "OpenAI", model: "GPT-4", price: "$0.03" },
                { api: "Together AI", model: "Llama-2-70b", price: "$0.0008" },
                { api: "Together AI", model: "Llama-2-13b", price: "$0.0006" },
              ].map((row, index) => (
                <tr key={index} className={modeClasses.tableText}>
                  <td className={`px-4 py-2 border ${modeClasses.borderColor} ${modeClasses.lightText}`}>{row.api}</td>
                  <td className={`px-4 py-2 border ${modeClasses.borderColor} ${modeClasses.lightText}`}>{row.model}</td>
                  <td className={`px-4 py-2 border ${modeClasses.borderColor} ${modeClasses.lightText}`}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`mt-6 ${modeClasses.tableText} text-sm`}>
          <h3 className={`text-2xl font-semibold py-2 ${modeClasses.text}`}>
            Token Estimation
          </h3>
          <p className="mt-2 font-semibold text-[16px]">
            On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
          </p>
          <h3 className={`text-2xl font-semibold py-2 ${modeClasses.text}`}>
            Billing
          </h3>
          <p className="mt-2 font-semibold text-[16px]">
            You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
