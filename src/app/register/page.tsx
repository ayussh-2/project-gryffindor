import RegistrationForm from "@/components/Register/RegistrationForm";
import Image from "next/image";

const Register = () => {
    return (
        <>
            {/* Background Div */}
            <div 
                id="BGdiv" 
                className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center text-center gap-4 -z-30">
                <Image 
                    src={'/Images/backNU.avif'} 
                    fill={true} 
                    alt={"Background"} 
                    className="object-cover" 
                />
                <Image 
                    src={'/Images/logo.png'} 
                    width={600} 
                    height={600} 
                    className="absolute mix-blend-soft-light" 
                    alt={"Logo"} 
                />
                <div className="absolute inset-0 bg-[#00000094]" />
            </div>

            {/* Content Div */}
            <div id="Cdiv" className="relative flex justify-center sm:justify-evenly sm:p-8 z-10">
                <RegistrationForm />
            </div>
        </>
    );
};

export default Register;
