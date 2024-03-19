"use client"
import { useState, useEffect } from 'react';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

const data = ["Shoes", "Men-tshirt", "Makeup", "Jewellery", "Furniture", "45", "48", "1200", "45"];

const Interest = () => {

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

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="bg-white px-6 py-16">
            <div className='mx-auto max-w-lg border border-[#C1C1C1] rounded-[20px] py-8 px-12'>
                <h2 className="text-2xl text-center font-semibold tracking-tight text-gray-900 sm:text-3xl">Please mark your interests!</h2>
                <h2 className="text-base font-normal text-center tracking-tight text-gray-900 mt-5">We will keep you notified.</h2>
                <div>
                    <h2 className='text-xl font-medium mt-10'>My saved interests! {userName} </h2>
                    <div className="flex flex-col mt-4">
                        {currentItems.map((e, i) => {
                            return (
                                <label key={i}>
                                    <input type="checkbox" className="accent-black font-normal font-base mr-3 mt-3 checkbox" />
                                    {e}
                                </label>
                            );
                        })}
                    </div>
                    <div className="flex items-center mt-10">
                        <ChevronDoubleLeftIcon className="h-6 w-6 cursor-pointer text-[#ACACAC]" onClick={goToFirstPage} aria-hidden="true" />
                        <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-[#ACACAC]" onClick={() => handlePageChange(currentPage - 1)} aria-hidden="true" />
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`mx-1 text-xl font-medium ${currentPage === index + 1
                                    ? ' text-black'
                                    : ' text-[#ACACAC]'
                                    }`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <ChevronRightIcon className="h-6 w-6 cursor-pointer text-[#ACACAC]" onClick={() => handlePageChange(currentPage + 1)} aria-hidden="true" />
                        <ChevronDoubleRightIcon className="h-6 w-6 cursor-pointer text-[#ACACAC]" onClick={goToLastPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interest;
