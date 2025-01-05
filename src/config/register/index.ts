export const formFields = [
    {
        name: "name",
        label: "Name",
        placeholder: "Your Name",
        type: "text",
        required: true,
    },
    {
        name: "institute",
        label: "Institute",
        placeholder: "Your Institute",
        type: "text",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Your Email",
        type: "email",
        required: true,
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
        },
    },
    {
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "Your Phone Number",
        type: "tel",
        required: true,
        pattern: {
            value: /^[0-9]{10}$/,
            message: "Invalid phone number",
        },
    },
    {
        name: "city",
        label: "City",
        placeholder: "Your City",
        type: "text",
        required: true,
    },
    {
        name: "state",
        label: "State",
        placeholder: "Your State",
        type: "text",
        required: true,
    },
    {
        name: "referralCode",
        label: "Referral Code",
        placeholder: "Referral Code (Optional)",
        type: "text",
    },
];
