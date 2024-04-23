import React from "react";
import "./App.css";
import CourseCard from "./CourseCard";
import courseDetails from "../CourseDetails";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {courseDetails.map((item, index, self) => {
        return (
          <CourseCard
            key={index}
            image={item.image}
            courseName={item.courseName}
            tutor={item.tutor}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default App;
