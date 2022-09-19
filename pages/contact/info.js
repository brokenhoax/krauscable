import Link from "next/link";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Logo from "../../components/logo/logo.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faHeadset,
  faUserGear,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <Layout>
      <Logo></Logo>
      <section className="pb-128">
        <h1>Contact Info</h1>
        {/* Address */}
        <div className="pt-24">
          <h2>Main Office</h2>
          <Link
            className="link"
            href="https://goo.gl/maps/PgSRWJcbeoV9bGdH7"
            target="_blank"
            rel="noreferrer"
          >
            305 State Street Manhattan, IL 60442
          </Link>
        </div>
        <div className={"divider"}></div>
        {/* Office Hours */}
        <div>
          <h2>Office Hours</h2>
          <div className={"space-between"}>
            <p>9am - 5pm</p>
            <p>Monday - Friday</p>
          </div>
          <div className={"space-between"}>
            <p>9am - 12pm</p>
            <p>Saturday</p>
          </div>
          <div className={"space-between"}>
            <p>Closed</p>
            <p>Sunday</p>
          </div>
        </div>
        <div className={"divider"}></div>
        {/* Phone */}
        <div>
          <h2>Phone</h2>
          <p>1-815-478-4000</p>
          <p>1-800-442-2253 (1-800-44-CABLE)</p>
        </div>
        <div className={"divider"}></div>
        {/* Email */}
        <div>
          <h2>Email</h2>
          <div className="flex-col">
            <div className="flex">
              <FontAwesomeIcon icon={faTelevision} className={"icon-small"} />
              <p className="pl-16 link">
                <a href="/services/overview">Order Services</a>
              </p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faHeadset} className={"icon-small"} />
              <p className="pl-16 link">
                <a href="mailto:krauscable@krausonline.com">Customer Support</a>
              </p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faUserGear} className={"icon-small"} />
              <p className="pl-16 link">
                <a href="mailto:andrew@krausonline.com?subject=Kraus Cable Webmaster">
                  Webmaster
                </a>
              </p>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className={"icon-small"}
              />
              <p className="pl-16 link">
                <a href="mailto:art@krausonline.com?subject=Reporting Abuse">
                  Report Abuse
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Navbar></Navbar>
    </Layout>
  );
}
