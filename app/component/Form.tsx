"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const initialFormData = {
        name: '',
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://server-f9h9.onrender.com/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Registration successful
                const data = await response.json();
                console.log('User registered:', data);
                // Reset form fields to initial empty state
                setFormData(initialFormData);
                router.push('/interest');
            } else {
                // Registration failed
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        } finally {
            setLoading(false); // Set loading back to false when registration process ends
        }
    };

    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className='mx-auto max-w-2xl border border-[#C1C1C1] rounded-[20px]'>
                <h2 className="text-xl font-semibold tracking-tight sm:text-[32px] text-center pt-[39px]">Create your account</h2>
                <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-base font-normal leading-6">
                                Name
                            </label>
                            <div className="mt-1.5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter'
                                    id="name"
                                    autoComplete="organization"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-base font-normal leading-6">
                                Email
                            </label>
                            <div className="mt-1.5">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder='Enter'
                                    id="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="password" className="block text-base font-normal leading-6">
                                Password
                            </label>
                            <div className="mt-1.5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Enter'
                                    required
                                    id="password"
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 mx-5">
                        <button
                            type="submit"
                            disabled={loading} // Disable the button when loading is true
                            className="flex items-center justify-center w-full gap-2 rounded-md bg-black px-3.5 py-4 text-center font-medium sm:text-base text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative"
                        >
                            {loading && ( // Conditionally render the spinner if loading is true
                                <svg className="text-yellow-400 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24">
                                    <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                    </path>
                                </svg>
                            )}
                            CREATE ACCOUNT
                        </button>
                    </div>

                </form>

                <div className='mt-10 mb-20'>
                    <h3 className='text-center font-normal text-base text-[#333333]'>Have an Account? <Link href="/login" className='text-base font-medium'>LOGIN</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Form;
