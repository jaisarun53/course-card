import React from "react";

const CourseCard = (props) => {
  return (
    <div
      style={{
        width: "400px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <img src={props.image} style={{ width: "100%" }} />
      <h3>{props.courseName}</h3>
      <h4>By Dr{props.tutor}</h4>
      <p style={{ color: props.price > 50 ? "red" : "" }}>${props.price}</p>
    </div>
  );
};

export default CourseCard;
