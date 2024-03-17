import Link from 'next/link';

const Verification = () => {
    return (
        <div className=" bg-white px-6 py-16 lg:px-8">
            <div className='mx-auto max-w-xl border border-[#C1C1C1] rounded-[20px]'>
                <h2 className="text-xl font-semibold tracking-tight sm:text-[32px] text-center pt-[39px]">Verify your email</h2>
                <h2 className="text-sm font-normal tracking-tight text-center text-gray-900 sm:text-base mt-6">
                    Enter the 8 digit code you have received on <br />
                    <span className='font-medium'>swa***@gmail.com</span>
                </h2>

                <div className="sm:mx-auto mt-10 max-w-md mx-4">
                    <h3 className='text-base font-normal text-black mt-10'>Code</h3>
                    <div className="flex items-center mt-2 gap-x-4">
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="flex items-center justify-center w-full sm:h-10 sm:text-2xl font-medium border border-[#C1C1C1] rounded-md text-center"
                        />
                    </div>


                    <div className="my-12">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            VERIFY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification;
