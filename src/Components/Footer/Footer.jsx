import { Facebook, Linkedin, X, Youtube } from "lucide-react";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-100 text-base-content  px-5 md:px-28 lg:px-28">
        <aside>
          <Link>
            <h1 className="text-xl md:text-4xl font-bold italic">
              <span className="text-[#F16623]">E</span>DUPORT
            </h1>
          </Link>

          <div className="flex gap-4 justify-center items-center mt-6">
            <div className="bg-blue-200 p-2 rounded cursor-pointer">
              <Facebook className="stroke-blue-700 w-4 h-4" />
            </div>
            <div className="bg-gray-200 p-2 rounded cursor-pointer">
              <X className="stroke-gray-700 w-4 h-4" />
            </div>
            <div className="bg-red-200 p-2 rounded cursor-pointer">
              <Youtube className="stroke-red-700 w-4 h-4" />
            </div>
            <div className="bg-blue-200 p-2 rounded cursor-pointer">
              <Linkedin className="stroke-blue-700 w-4 h-4" />
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Teaching</h6>
          <a className="link link-hover">Become a techer</a>
          <a className="link link-hover">how to guide</a>
          <a className="link link-hover">terms and condition</a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Toll free:+1234 568 963</a>
          <a className="link link-hover">(9:AM to 8:PM IST)</a>
          <a className="link link-hover">Email:eduport@gmail.com</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
