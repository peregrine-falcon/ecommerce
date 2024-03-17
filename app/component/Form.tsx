import Link from 'next/link';

const Form = () => {

    return (
        <div className=" bg-white px-6 py-16 lg:px-8">
            <div className='mx-auto max-w-2xl border border-[#C1C1C1] rounded-[20px]'>
                <h2 className="text-xl font-semibold tracking-tight  sm:text-[32px] text-center pt-[39px]">Create your account</h2>
                <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-base font-normal leading-6">
                                Name
                            </label>
                            <div className="mt-1.5">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder='Enter'
                                    id="company"
                                    autoComplete="organization"
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
                                    placeholder='Enter'
                                    id="email"
                                    autoComplete="email"
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
                                    type="text"
                                    name="password"
                                    placeholder='Enter'
                                    id="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 mx-5">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center font-medium sm:text-base text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            CREATE ACCOUNT
                        </button>
                    </div>
                </form>

                <div className='mt-10 mb-20'>
                    <h3 className='text-center font-normal text-base text-[#333333]'>Have an Account? <Link href="/login" className='text-base font-medium'>LOGIN</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Form;
