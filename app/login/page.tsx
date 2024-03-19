"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter(); // Initialize useRouter hook
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (event: any) => {
        event.preventDefault();
        setShowPassword(prevState => !prevState);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('https://server-f9h9.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Login successful
                const data = await response.json();
                console.log('Login successful:', data);
                // Redirect to /interest page
                router.push('/interest');
            } else {
                // Login failed
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className=" bg-white px-6 py-16 lg:px-8">
            <div className='mx-auto max-w-2xl border border-[#C1C1C1] rounded-[20px]'>
                <h2 className="text-xl font-semibold tracking-tight sm:text-[32px] text-center pt-[39px]">Login</h2>
                <h3 className="text-lg font-medium tracking-tight sm:text-2xl text-center pt-10">Welcome back to ECOMMERCE</h3>
                <h4 className="text-sm font-normal tracking-tight sm:text-base text-center pt-2">The next gen business marketplace</h4>
                <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-base font-normal leading-6">
                                Email
                            </label>
                            <div className="mt-1.5">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter'
                                    id="email"
                                    required
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
                            <div className="mt-1.5 flex relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder='Enter'
                                    required
                                    id="password"
                                    autoComplete="current-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 relative px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button
                                    onClick={(event) => togglePasswordVisibility(event)}
                                    className='absolute right-3.5 top-2 font-normal text-base underline'
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 mx-5">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center font-medium sm:text-base text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>

                <hr className="h-px w-full max-w-[528px] mx-auto m-8 bg-[#C1C1C1] border-0" />

                <div className='mt-10 mb-10 sm:mb-20'>
                    <h3 className='text-center font-normal text-base text-[#333333]'>Don&apos;t have an Account? <Link href="/" className='text-base font-medium'>SIGN UP</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Login;
