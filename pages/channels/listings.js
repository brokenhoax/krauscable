import React, { useState } from "react";
import styles from "./listings.module.css";
import { listings } from "../../public/channels.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faFilter,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

export default function Listings() {
  const [list, setListing] = useState(listings);
  const [order, setOrder] = useState({
    sortColumn: { path: "channel", order: "desc" },
  });
  const [filterToggle, setFilterToggle] = useState(false);
  const [subscription, setSubscription] = useState("platinum");

  let handlePackageFilter = () => {
    let toggle = filterToggle;
    toggle = !toggle;
    setFilterToggle(toggle);
  };

  let handlePackageSelection = (selection) => {
    handlePackageFilter();
    setSubscription(selection);
    const newList = [...listings];
    if (subscription) {
      const results = newList.filter((listing) => {
        return listing["packages"].includes(selection);
      });
      setListing(results);
    } else {
      setListing(list);
    }
    handlePackageFilter();
  };

  function showOptions() {
    return (
      <div className={styles.optionsWrapper}>
        <div
          className={styles.option}
          onClick={() => handlePackageSelection("platinum")}
        >
          Platinum
          <FontAwesomeIcon
            icon={faCheck}
            className={subscription === "platinum" ? "icon-xs red500" : "hide"}
          />
        </div>
        <div
          className={styles.option}
          onClick={() => handlePackageSelection("gold")}
        >
          Gold
          <FontAwesomeIcon
            icon={faCheck}
            className={subscription === "gold" ? "icon-xs red500" : "hide"}
          />
        </div>
        <div
          className={styles.option}
          onClick={() => handlePackageSelection("silver")}
        >
          Silver
          <FontAwesomeIcon
            icon={faCheck}
            className={subscription === "silver" ? "icon-xs red500" : "hide"}
          />
        </div>
        <div
          className={styles.option}
          onClick={() => handlePackageSelection("bronze")}
        >
          Bronze
          <FontAwesomeIcon
            icon={faCheck}
            className={subscription === "bronze" ? "icon-xs red500" : "hide"}
          />
        </div>
      </div>
    );
  }

  let handleSearch = (e) => {
    const newList = [...list];
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const results = newList.filter((listing) => {
        return listing.description.toLowerCase().includes(keyword);
      });
      setListing(results);
    } else {
      setListing(listings);
    }
  };

  let handleSort = (path) => {
    const sortColumn = { ...order };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    setOrder(sortColumn);
  };

  let sorted = _.orderBy(list, [order.path], [order.order]);

  return (
    <div className={`${styles.flexTest}`}>
      {/* Table */}
      <div className={styles.listings}>
        <div className="table-wrapper">
          <h1 className={`flex-between ${styles.header}`}>
            Channel Listing {/* Packages */}
            <span className={styles.packages}>
              <FontAwesomeIcon
                icon={faFilter}
                className="icon-xs"
                // onBlur={() => handlePackageFilter()}
                // onFocus={() => handlePackageFilter()}
                onClick={() => handlePackageFilter()}
                tabIndex="0"
              />
              <div className={styles.filter}>
                {filterToggle ? showOptions() : null}
              </div>
            </span>
          </h1>
          <table width="100%">
            <thead>
              <tr>
                <th onClick={() => handleSort("channel")}>
                  <FontAwesomeIcon
                    icon={order.order === "asc" ? faCaretUp : faCaretDown}
                    className={"icon-xs"}
                  />
                  <span className="pl-4">Channel</span>
                </th>
                <th onClick={() => handleSort("description")}>
                  <FontAwesomeIcon
                    icon={order.order === "asc" ? faCaretDown : faCaretUp}
                    className={"icon-xs"}
                  />
                  <span className="pl-4">Name</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((x) => (
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
      <div action="#" className="search-form">
        <div>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search..."
            name="search"
            className="search-input"
          ></input>
        </div>
      </div>
    </div>
  );
}
