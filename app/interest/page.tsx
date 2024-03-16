
const data = ["shoes", "men-tshirt", "makeup", "Jewellery", "Furniture"];

const interest = () => {
    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className='max-w-2xl mx-auto border border-black p-5'>
                <h2 className="text-2xl text-center font-semibold tracking-tight text-gray-900 sm:text-3xl">Please mark your interests!</h2>
                <h2 className="text-xl font-medium text-center tracking-tight text-gray-900 sm:text-2xl mt-5">We will keep you notified.</h2>
                <div>
                    <h2 className='text-xl font-medium'>My saved interests!</h2>
                    <div className="flex flex-col mt-4">
                        {data.map((e, i) => {
                            return <label key={i}><input type="checkbox" className="accent-black" />{e}</label>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default interest
