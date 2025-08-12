import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="Contact">
        <div className="logo">
          <div className="flex">
            <Image
              className="img"
              src="/assets/brand-logo/logo2.png"
              alt="Logo"
              width="40"
              height="40"
            />
            <h4>E-Cell CIT Kokrajhar</h4>
          </div>

          <div className="copy">
            &#169; Enterpreneurship Development Club - All Rights Reserved
          </div>
        </div>
        <ul className="Links">
          <li>
            <b>Page</b>
          </li>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
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
        </ul>
        <ul className="initiatives">
          <li>
            <b>Useful Links</b>
          </li>
          <li>
            <Link href="https://cit.ac.in/" target="_blank">
              CIT Kokrajhar
            </Link>
          </li>
          <li>
            <Link href="http://centrallibrary.cit.ac.in/" target="_blank">
              Central Library
            </Link>
          </li>
          <li>
            <Link href="https://placements.cit.ac.in" target="_blank">
              Training and placement cell
            </Link>
          </li>
        </ul>
        <div className="contact" id="reach-us">
          <h6>Reach Us</h6>
          <p>
            <Image
              src="/assets/Icons/phone-call.png"
              alt="Phone-Number"
              width="30"
              height="30"
            />
            +91-863-234-5678
          </p>
          <br />
          <p>
            <Image
              src="/assets/Icons/email.png"
              alt="Email"
              width="30"
              height="30"
            />
            <Link href="ecell@cit.ac.in">ecell@cit.ac.in</Link>
          </p>
          <br />
          <p>
            <Image
              src="/assets/Icons/pin.png"
              alt="Location"
              width="30"
              height="30"
            />
            <Link
              href="https://maps.app.goo.gl/P7fJWA84zRoDdpwa9:"
              target="_blank"
            >
              Click here
            </Link>
          </p>
        </div>
        <div className="design">
          Reboot by &nbsp; <span>Jonak</span> &nbsp;,&nbsp;<span>Kinjal</span>{" "}
          &nbsp;and &nbsp; <span>Dibyojit</span>
        </div>

        <div className="social">
          {/* <!-- <h6>Follow us </h6>  --> */}
          <Link
            href="https://www.instagram.com/ecell_citk?igsh=MXE3dXR5Ym8wbzRmbA=="
            target="_blank"
          >
            <Image
              width="40"
              height="40"
              src="/assets/Icons/instagram.png"
              alt="Instagram"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/company/e-cell-citk/"
            target="_blank"
          >
            <Image
              width="40"
              height="40"
              src="/assets/Icons/linkedin.png"
              alt="Linkedin"
            />
          </Link>

          <Link href="#">
            <Image
              width="40"
              height="40"
              src="/assets/Icons/twitter.png"
              alt="X"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
