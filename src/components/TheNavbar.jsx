
const TheNavbar = () => {
    return (
        <>
        <div className="bg-gray-800 text-white px-10 py-3 flex justify-between items-center">
            <h1 className="font-semibold text-xl">Ecommerce</h1>
            <ul className="flex space-x-4 text-md">
                <li className="hover:text-yellow-500 cursor-pointer">Home</li>
                <li className="hover:text-yellow-500 cursor-pointer">About</li>
                <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
            </ul>
        </div>
        </>
    )
    
}

export default TheNavbar