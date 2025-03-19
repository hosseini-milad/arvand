import React from "react";
import "./CategoryLists.css";
export default function CategoryLists(props) {
  const { SelectedTab, Data } = props;
  const CatList = Data && Data.find((item) => item.catCode === SelectedTab);
  return (
    <div className="CategoryLists">
      <div className="CategoryLists-container">
        <div className="list-wrapper">
          <ul>
            {CatList &&
              CatList.child.map((list, i) => <li key={i}>{list.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
