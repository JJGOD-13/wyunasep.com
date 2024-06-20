import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="navbar bg-base-100 p-3">
            <div className='navbar-start px-4'>
           <Link href="/" >WyunaSep</Link> 
            </div>
           <div className='navbar-end flex px-4 '>
           <Link href="/about" className='btn btn-ghost btn-sm font-normal'>About us</Link>
           <Link href="/products" className='btn btn-ghost btn-sm font-normal'>Products</Link>
           <Link href="/blog" className='btn btn-ghost btn-sm font-normal'>Blog</Link>
           <Link href="/contact" className='btn btn-ghost btn-sm font-normal'>Get Quote</Link>
           </div>

        </nav>
    )
}
    