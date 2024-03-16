import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-end items-center gap-2 sm:gap-5 bg-white py-3 px-6">
            <Link href="/" className="font-normal text-xs text-[#333333]">Help</Link>
            <Link href="/" className="font-normal text-xs text-[#333333]">Orders & Returns</Link>
            <p className="font-normal text-xs text-[#333333]">Hi, John</p>
        </div>
    )
}

export default Header;
