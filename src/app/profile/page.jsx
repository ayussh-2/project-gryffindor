'use client';
import React from 'react';
import { useAuth } from '../../contexts/auth-context';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/navbar';


const Profile = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    if (!user) {
        router.push('/login'); // Redirect to login if not authenticated
        return null;
    }

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className='main font-Spirits  min-h-screen' style={{ backgroundImage: 'radial-gradient(circle, #457787 0%, #071228 100%)' }}>
            <div className='w-full flex items-center justify-center'><Navbar /></div>
            <div className="min-h-screen  mt-8  flex flex-col items-center justify-center bg-no-repeat md:bg-contain h-64 md:h-96 bg-center  " style={{ backgroundImage: 'url(/Images/profile.png)' }}>

                <div className="   flex flex-col gap-4 mb-8 justify-center items-center">
                    <h1 className="md:text-[3rem] text-[2rem]  top-[20%] mb-4 pt-[2rem] font-extrabold   font-Spirits z-30 text-[#457787] text-center ">Profile</h1>
                    <div className='flex flex-col gap-4 justify-start '>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Status:</strong> You have succesfully registered for the fest enjoy 👻</p>
                    </div>

                    <div>
                        <button
                            onClick={handleLogout}
                            className="mt-4 px-6 py-2 bg-[#071228] text-white rounded hover:bg-[#071248] "
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;
