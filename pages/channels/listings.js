import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Logo from "../../components/logo/logo.js";
import styles from "./listings.module.css";
import { listings } from "../../public/channels.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Listings() {
  return (
    <Layout>
      <Logo></Logo>
      <section>
        <div className={styles.listings}>
          <h1 className={styles.header}>Channel Listing</h1>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>
                    {" "}
                    <FontAwesomeIcon icon={faCaretDown} className={"icon-xs"} />
                    <span className="pl-4">Channel</span>
                  </th>
                  <th>
                    {" "}
                    <FontAwesomeIcon icon={faCaretDown} className={"icon-xs"} />
                    <span className="pl-4">Name</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listings.map((x) => (
                  <tr key={x.id}>
                    <td>{x.channel}</td>
                    <td>{x.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Search */}
        <form action="#" className="flex-col mt-1 search-form">
          <div className="test">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="search-input"
            ></input>
            {/* <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={"icon-xs search-btn"}
              />
            </button> */}
            <select
              id="ex-dropdown-input"
              autocomplete="off"
              placeholder="How cool is this?"
            >
              <option selected>--Select--</option>
              <option>Bronze Package</option>
              <option>Silver Package</option>
              <option>Gold Package</option>
              <option>Platinum Package</option>
            </select>
          </div>
        </form>
      </section>
      <Navbar></Navbar>
    </Layout>
  );
}
