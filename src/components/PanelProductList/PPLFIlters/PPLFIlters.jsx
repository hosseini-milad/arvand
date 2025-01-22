import React from "react";
import "./PPLFIlters.css";
export default function PPLFIlters() {
  return (
    <div className="PPLFIlters">
      <div className="PPLFIlters-container">
        <div className="title-wrapper">
          <p className="title">
            Manage Products
            <span>(Total 1)</span>
          </p>
          <button className="add-btn">Post New</button>
        </div>
        <div className="filter-wrapper">
          <div className="action">
            <select name="" id="">
              <option value="">delete</option>
              <option value="">publish</option>
            </select>
            <button className="apply filter-btn">Apply</button>
          </div>
          <div className="group">
            <select name="" id="">
              <option value="">group 1</option>
              <option value="">group 2</option>
            </select>
          </div>
          <div className="search">
            <input type="text" name="" id="" placeholder="Search product..."/>
            <button className="filter-btn">GO!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
