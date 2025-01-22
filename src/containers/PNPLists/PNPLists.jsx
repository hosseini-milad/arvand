import React from "react";
import {
  PNPTrade,
  PNPBasic,
  PNPCategory,
  PNPDetails,
  PNPLogistic,
  PNPProductDetail,
  NewProductBtns,
} from "../../components";
import "./PNPLists.css";
export default function PNPLists() {
  return (
    <div className="PNPLists">
      <div className="PNPLists-container">
        <div className="search-wrapper">
          <p className="title">Search Category</p>
          <div className="wrapper">
            <input
              type="text"
              placeholder="Enter industry Keywords:e.g. laptop"
            />
            <button>Search</button>
          </div>
        </div>
        <PNPCategory />
        <div className="box-shadow">
          <PNPBasic />
          <PNPDetails />
          <PNPTrade />
          <PNPLogistic />
          <PNPProductDetail />
          <NewProductBtns />
        </div>
      </div>
    </div>
  );
}
