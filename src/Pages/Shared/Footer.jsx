import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="footer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-around bg-base-200 text-base-content p-10">
            <aside>
                <img src={logo} alt="MH LOGO" />
                <div>
                    MH Renthub
                    <br />
                    Providing reliable tech since 2001
                    <br />
                    <p>© {new Date().getFullYear()} MH Renthub. All rights reserved.</p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav className="flex justify-center space-x-4 p-4 bg-gray-900 text-white">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={30} />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;