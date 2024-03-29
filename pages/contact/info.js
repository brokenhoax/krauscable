import Link from "next/link";
import styles from "./info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faHeadset,
  faUserGear,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.header}>Contact Info</h1>
        {/* Address */}
        <div className={styles.body}>
          <h2>Main Office</h2>
          <a
            className="link"
            href="https://goo.gl/maps/PgSRWJcbeoV9bGdH7"
            target="_blank"
            rel="noopener noreferrer"
          >
            305 State Street Manhattan, IL 60442
          </a>
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
              <FontAwesomeIcon icon={faTelevision} className={"icon-sm"} />
              <p className="pl-16 link">
                <Link href="/services">Order Services</Link>
              </p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faHeadset} className={"icon-sm"} />
              <p className="pl-16 link">
                <a href="mailto:krauscable@krausonline.com">Customer Support</a>
              </p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faUserGear} className={"icon-sm"} />
              <p className="pl-16 link">
                <a href="mailto:andrew@krausonline.com?subject=Kraus Cable Webmaster">
                  Webmaster
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
