import React, { useState, useEffect } from "react";
import "./TricksColum.css";
import PostReq from "../../hooks/PostReq";
export default function TricksColum() {
  const [Data, setData] = useState();
  const FetchBlogs = async () => {
    const result = await PostReq({
      method: "GET",
      url: "/setting/blog-post",
      body: {},
    });
    setData("");
    setTimeout(() => setData(result), 200);
  };
  useEffect(() => {
    FetchBlogs();
  }, []);
  const TrickList = [
    {
      icon: "./logoRaw.png",
      text: "International Conference on Occupational Health Psychology ICOHP",
      sub: "Venue : Rome",
    },
    {
      icon: "./logoRaw.png",
      text: "International Conference on Occupational Health Psychology ICOHP",
      sub: "Venue : Rome",
    },
    {
      icon: "./logoRaw.png",
      text: "International Conference on Occupational Health Psychology ICOHP",
      sub: "Venue : Rome",
    },
  ];
  return (
    <div className="TricksColum">
      <div className="Blog-title">
        <p>ترفندهای ما</p>
      </div>
      <div className="TricksColum-container">
        {TrickList.map((trick, i) => (
          <div key={i} className="trick-box">
            <img src={trick.icon} alt="icon" />
            <div className="text">
              <p>{trick.text}</p>
              <span>{trick.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
