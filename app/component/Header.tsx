"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";

const Header = () => {

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token'); // Assuming you store the JWT token in localStorage
        if (token) {
            fetchUserData(token);
        } else {
            console.error("name is not defined")
        }
    }, []);

    const fetchUserData = async (token: any) => {
        try {
            const response = await fetch('https://server-f9h9.onrender.com/user/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const userData = await response.json();
                setUserName(userData.data.name);
            } else {
                // Handle error response
                console.error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    return (
        <div className="flex justify-end items-center gap-2 sm:gap-5 bg-white py-3 px-6">
            <Link href="/" className="font-normal text-xs text-[#333333]">Help</Link>
            <Link href="/" className="font-normal text-xs text-[#333333]">Orders & Returns</Link>
            <p className="font-normal text-xs text-[#333333]">Hi, {userName}!</p>
        </div>
    )
}

export default Header;

