import React, { useState } from "react";
import classData from "../class.json";
import "../Style/Home.css";
import img from "../assets/Authoring-Tools.jpg";

const Home = () => {
  const [showShortDesc, setShowShortDesc] = useState({});

  const toggleShortDesc = (id) => {
    setShowShortDesc((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1 className="title">Technical Writing Course</h1>
          <p className="description">
            This course focuses on understanding the basics of technical writing
            and developing technical writing skills. You will learn techniques
            to analyze writing contexts, helping you to produce effective,
            clean, and reader-centered documents efficiently.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <div className="classes">
        <h2 className="class-title">Classes</h2>
        <p className="class-description">
          This course focuses on understanding the basics of technical writing
          and developing technical writing skills.
        </p>
      </div>
      <div className="card-container">
        {classData.map((classItem) => (
          <div key={classItem.ID} className="card">
            <img src={img} alt={classItem.ID} className="card-image" />
            <h2 className="card-title">{classItem.Name}</h2>
            {showShortDesc[classItem.ID] && (
              <p className="card-description">{classItem.ShortDesc}</p>
            )}
            <button
              className="card-button"
              onClick={() => toggleShortDesc(classItem.ID)}
            >
              {showShortDesc[classItem.ID] ? "Hide" : "View"}
            </button>
          </div>
        ))}
      </div>
      <div className="footer">
        <div>Copyright 2021 All Rights Reserved</div>
        <div>Back to top</div>
      </div>
    </div>
  );
};

export default Home;
