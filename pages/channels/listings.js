import React, { useState } from "react";
import styles from "./listings.module.css";
import { listings } from "../../public/channels.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

export default function Listings() {
  const [list, setListing] = useState(listings);
  const [order, setOrder] = useState({
    sortColumn: { path: "channel", order: "desc" },
  });

  const handleSearch = (e) => {
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
    <div className={`${styles.flexTest} ${styles.header}`}>
      {/* Table */}
      <div className={styles.listings}>
        <div className="table-wrapper">
          <h1 className={styles.header}>Channel Listing</h1>
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
      {/* Filters */}
      <div action="#" className="search-form">
        <div>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search..."
            name="search"
            className="search-input"
          ></input>
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
