import styles from "./listings.module.css";
import { listings } from "../../public/channels.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Listings() {
  return (
    <div className={`${styles.flexTest} ${styles.header}`}>
      {/* Table */}
      <div className={styles.listings}>
        <div className="table-wrapper">
          <h1 className={styles.header}>Channel Listing</h1>
          <table width="100%">
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
      {/* Buttons */}
      <div action="#" className="search-form">
        <div>
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
            autoComplete="off"
            placeholder="How cool is this?"
          >
            <option value="selected">--Select--</option>
            <option value="bronze">Bronze Package</option>
            <option value="silver">Silver Package</option>
            <option value="gold">Gold Package</option>
            <option value="platinum">Platinum Package</option>
          </select>
        </div>
      </div>
    </div>
  );
}
