import React from "react";

const PrivacyPolicy: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#121212] text-gray-300">
      <div className="w-full max-w-5xl bg-[#1E1E1E] shadow-md rounded-md p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#FF6B6B]">
      Nitrutsav 2024 Refund Policy
        </h1>

<p className="mb-6">
  At Nitrutsav 2024, we are committed to providing an enriching experience for all participants. Please review our refund policy carefully:
</p>

<div className="space-y-6">
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-200">Pricing</h2>
    <p>
      The registration fees for Nitrutsav 2024 apply to all students from outside NIT Rourkela. This fee grants access to all events, workshops, and exhibitions during the fest. For students of NIT Rourkela, registration is completely free. Registration covers participation in most events, though some workshops may require additional fees for materials. We encourage all students to register early to secure their spot, as registrations may close once we reach capacity.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-200">No Refunds on Registrations and Payments</h2>
    <p>
      Once registration or payment is completed, refunds will not be issued under any circumstances. This applies to all ticket types, event passes, and additional purchases made through our website.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-200">Event Cancellation by Organizers</h2>
    <p>
      Refunds will only be issued if Nitrutsav 2024 is canceled by the organizers. In such a case, all registered participants will receive a full refund through the original payment method, processed within 14 days of the cancellation announcement. We highly recommend double-checking your availability before confirming your registration.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-200">Force Majeure</h2>
    <p>
      In the event of unforeseen circumstances such as natural disasters, government restrictions, or other events beyond our control, Nitrutsav 2024 organizers will make every effort to reschedule. However, refunds will not be issued under these conditions. Refunds will only be processed if Nitrutsav 2024 is officially canceled by the organizers.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-200">Contact for Help</h2>
    <p>
      If you have any questions or need assistance with your registration, please feel free to reach out to our support team at <a href="mailto:mail@nitrutsav.com" className="text-blue-400 underline">mail@nitrutsav.com</a>. We are here to help with any queries related to registration, event details, or technical issues. Our team will respond within 24-48 hours to ensure you have all the information you need to enjoy Nitrutsav 2024 to the fullest.
    </p>
  </div>
</div>

<p className="mt-6">
  By registering for Nitrutsav 2024, you agree to abide by our refund policy.
</p>
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;