import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    src="/assets/brand-logo/logo2.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    loading="lazy"
                />
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fa-solid fa-bars"></i>
            </label>

            <ul className="list">
                <li id="active">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="#Contact">Reach Us</Link>
                </li>
                <li>
                    <Link href="/udbhav">E-Summit 24</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
