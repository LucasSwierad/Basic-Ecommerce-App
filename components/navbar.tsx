import Link from "next/link";
export const Navbar = () => {
    return <nav className="bg-slate-200 text-black flex justify-between  px-8 py-4">
        <div>
            <Link href="/">
                My Ecommerce
            </Link>
        </div>
        <div className="flex gap-x-8">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/checkout">Checkout</Link>
        </div>
        <div></div>
    </nav>
}

export default Navbar;