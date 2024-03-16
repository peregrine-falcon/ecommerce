import Link from 'next/link';

const verification = () => {
    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Verify your email</h2>
                <h2 className="text-sm font-normal tracking-tight text-gray-900 sm:text-base">
                    Enter the 8 digit code you have received on swa***@gmail.com
                </h2>
            </div>

            <div>
                <h3 className='text-base font-normal text-black text-center mt-10'>Code</h3>
                <div className="flex items-center justify-center mt-4 gap-x-4">
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        7
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        8
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        7
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        8
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        8
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        8
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        8
                    </p>
                    <p className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-[#365CCE] border border-[#365CCE] rounded-md">
                        8
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    VERIFY
                </button>
            </div>
        </div>
    )
}

export default verification
