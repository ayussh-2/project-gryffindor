import React from "react";

const PrivacyPolicy: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#121212] text-gray-300">
      <div className="w-full max-w-5xl bg-[#1E1E1E] shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#FF6B6B]">
          Terms and Conditiions
        </h1>

        <p className="mb-4 text-gray-400 text-sm text-center">
          Last updated: 1st December, 2024
        </p>
        <h1 className="text-3xl font-bold mb-6">Welcome to Nitrutsav 2024!</h1>

      <p className="mb-6">
        The website linked gives you the outline of our protocols. If you agree to the set of terms and conditions, you are welcomed as an entrant and will be redirected to proceed further.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Licence</h2>
          <p>
            Unless otherwise stated, Nitrutsav and/or its licensors own the intellectual property rights for all material on Nitrutsav 2024. All intellectual property rights are reserved. You may access this from Nitrutsav 2024 for your personal use subject to restrictions set in these terms and conditions.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Copy or republish material from Nitrutsav 2024</li>
            <li>Sell, rent, or sub-license material from Nitrutsav 2024</li>
            <li>Reproduce, duplicate or copy material from Nitrutsav 2024</li>
            <li>Redistribute content from Nitrutsav 2024</li>
          </ul>
          <p className="mt-4">This Agreement shall begin on the date hereof.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Eligibility</h2>
          <p>
            Students from recognized educational institutions across India are eligible to participate in Nitrutsav 2024. However, students from blacklisted institutions (e.g., Siksha O Anusandhan (SOA) University, including all its affiliated colleges, and Institute of Technical Education and Research (ITER)) are strictly prohibited from registering or participating in the fest.
          </p>
          <p className="mt-4 font-semibold">Note:</p>
          <p>
            If a student from a banned institution registers, their registration will be canceled, and no refund will be provided.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Disclaimer</h2>
          <p>
            To the maximum permitted visitors conduct, nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Limit or exclude our or your liability for death or personal injury.</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="mt-4">
            The limitations and prohibitions of liability set in this section and elsewhere in this disclaimer:
          </p>
          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li>Are subject to the preceding paragraph.</li>
            <li>Govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</li>
          </ol>
          <p className="mt-4">
            As the website can be accessed by all verified visitors, we shall not uphold any liability for any damage.
          </p>
        </div>
      </div>
        

        
      </div>
    </div>
  );
};

export default PrivacyPolicy;