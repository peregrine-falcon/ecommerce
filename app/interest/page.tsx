'use client'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

interface Category {
    id: number;
    name: string;
}

const Interest = () => {
    const [userName, setUserName] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [checkedCategoryIds, setCheckedCategoryIds] = useState<number[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token);
            toast.success("You are logged In!");
            fetchCategories(token);
        } else {
            console.error("Token not found");
        }
    }, []);

    const fetchUserData = async (token: any) => {
        try {
            const response = await fetch('https://server-f9h9.onrender.com/user/profile', {
                method: 'GET',
                headers: {
                    'authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const userData = await response.json();
                setUserName(userData.data.name);
            } else {
                console.error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const fetchCategories = async (token: any) => {
        try {
            const response = await fetch('https://server-f9h9.onrender.com/category', {
                method: 'GET',
                headers: {
                    'authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const categoriesData = await response.json();
                setCategories(categoriesData.data);
            } else {
                console.error('Failed to fetch categories');
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleCheckboxChange = async (categoryId: number, checked: boolean) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://server-f9h9.onrender.com/user/category', {
                method: 'POST',
                headers: {
                    'authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    activeCategoryIds: checked ? [categoryId] : []
                })
            });
            if (response.ok) {
                if (checked) {
                    setCheckedCategoryIds(prevIds => [...prevIds, categoryId]);
                } else {
                    setCheckedCategoryIds(prevIds => prevIds.filter(id => id !== categoryId));
                }
            } else {
                console.error('Failed to update category association');
            }
        } catch (error) {
            console.error('Error updating category association:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <>
            <div className="bg-white px-6 py-16">
                <div className='mx-auto max-w-lg border border-[#C1C1C1] rounded-[20px] py-8 px-12'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-sm tracking-tight text-gray-900">Hi, {userName}</h2>
                        <button className="text-sm tracking-tight text-gray-900 ml-2 underline cursor-pointer" onClick={handleLogout}>Logout</button>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Please mark your interests!</h2>
                    <h2 className="text-base font-normal text-center tracking-tight text-gray-900 mt-5">We will keep you notified.</h2>
                    <div>
                        <h2 className='text-xl font-medium mt-10'>My saved interests!</h2>
                        <div className="flex flex-col mt-4">
                            {currentItems.map((category, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        className="accent-black font-normal font-base mr-3 mt-3 checkbox"
                                        onChange={(e) => handleCheckboxChange(category.id, e.target.checked)}
                                        checked={checkedCategoryIds.includes(category.id)}
                                    />
                                    {category.name}
                                </label>
                            ))}
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
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Interest;
