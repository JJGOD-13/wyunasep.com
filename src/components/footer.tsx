import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer p-10 text-base-content bg-base-300">
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about" className="link link-hover">
          About us
        </Link>
        <Link href="/privacy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/blog" className="link link-hover">
          Blog
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/products" className="link link-hover">
          Products
        </Link>
        <Link href="/seperators" className="link link-hover">
          Oil Water Seperators
        </Link>
        <Link href="/skimmers" className="link link-hover">
          Oil Skimmers
        </Link>
      </nav>
    </footer>
  );
}

