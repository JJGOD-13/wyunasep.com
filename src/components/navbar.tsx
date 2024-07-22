import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="navbar bg-neutral p-3 text-primary-content rounded-sm ">
      <div className='navbar-start px-4 rounded-lg '>
        <Link href="/" >WyunaSep</Link>
      </div>
      <div className=' hidden md:navbar-end md:flex md:px-4  '>
        <Link href="/about" className='btn btn-ghost btn-sm font-normal'>About us</Link>
        <Link href="/products" className='btn btn-ghost btn-sm font-normal'>Products</Link>
        <Link href="/blog" className='btn btn-ghost btn-sm font-normal'>Blog</Link>
        <Link href="/contact" className='btn btn-ghost btn-sm font-normal'>Get Quote</Link>
      </div>
      <div className='md:hidden navbar-end flex px-4'>
      <label htmlFor='my-drawer' aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

    </nav>
  )
}

export function NavbarLinks() {
  return (
    <>
<li>
        <Link href="/about" className='btn btn-ghost btn-sm font-normal'>About us</Link>
</li>
<li>
        <Link href="/products" className='btn btn-ghost btn-sm font-normal'>Products</Link>
</li>
<li>
        <Link href="/blog" className='btn btn-ghost btn-sm font-normal'>Blog</Link>
</li>
<li>
        <Link href="/contact" className='btn btn-ghost btn-sm font-normal'>Get Quote</Link>
</li>
    </>

  )
}
