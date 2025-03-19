import React, { useState, useEffect } from "react";
import "./CatCol.css";
import PostReq from "../../hooks/PostReq";
export default function CatCol() {
  const [Data, setData] = useState();
  const FetchCategory = async () => {
    const result = await PostReq({
      method: "GET",
      url: "/panel/product/list-category-site",
      body: {},
    });
    setData("");
    setTimeout(() => setData(result.filter), 200);
  };
  useEffect(() => {
    FetchCategory();
  }, []);
  const CatList = [
    {
      title: "ساختمانی بهداشتی",
      lists: [
        {
          title: "Underwear",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Wedding", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: "سیستم های مکانیکی",
      lists: [
        {
          title: "Coocking",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Air", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: "سیستم های الکترونیکی",
      lists: [
        {
          title: "Energy",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Food", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: "Beauty & Personal Care ",
      lists: [
        {
          title: "Baby",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Hair", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: " Security & Protection ",
      lists: [
        {
          title: "Police",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "CCTV", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: " Lights & Lighting ",
      lists: [
        {
          title: "LED",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Stage", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: " Automobiles  & Motorcycles ",
      lists: [
        {
          title: "Moto",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Valve", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: " Chemicals ",
      lists: [
        {
          title: "Paint",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Wall", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: " Food & Beverage ",
      lists: [
        {
          title: "Can",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "Fresh", list: ["Dresses", "Gown"] },
      ],
    },
    {
      title: " Minerals & Metallurgy ",
      lists: [
        {
          title: "Wire",
          list: ["Bra", "Womens Panties", "Mens Briefs Boxers", "Shapers"],
        },
        { title: "AL", list: ["Dresses", "Gown"] },
      ],
    },
  ];

  return (
    <div className="CatCol">
      <div className="CatCol-container">
        <p className="title">دسته بندی ها</p>
        <ul className="cat-list">
          {Data &&
            Data.map((li, i) => (
              <li key={i}>
                <a href="#">
                  <p>{li.title}</p>
                  <i className="fas fa-angle-left"></i>
                </a>
                <div className="list-menu">
                  <div className="list-container">
                    {li.child.map((list, c) => (
                      <a href="#" key={c} className="sub">
                        {list.title}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <p className="more-btn">مشاهده همه دسته ها</p>
      </div>
    </div>
  );
}
