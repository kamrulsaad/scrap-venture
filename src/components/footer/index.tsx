import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  InstagramIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto text-sm">
        {/* Brand / Address */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Scrap Venture Logo"
              width={200}
              height={40}
            />
            
          </div>
          <div>
            <p>
              <strong>Office Address:</strong>
              <br />
              House #123, Road #12, Mirpur DOHS
              <br />
              Dhaka – 1216, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+8801XXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>support@scrapventure.com</span>
          </div>
          <p>
            Customer Support: <strong>10am – 7pm</strong>
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="#">
              <InstagramIcon className="h-5 w-5 hover:text-muted" />
            </Link>
            <Link href="#">
              <Twitter className="h-5 w-5 hover:text-muted" />
            </Link>
            <Link href="#">
              <Linkedin className="h-5 w-5 hover:text-muted" />
            </Link>
            <Link href="#">
              <Facebook className="h-5 w-5 hover:text-muted" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/scrap-rates" className="hover:underline">
                Scrap Rates
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
