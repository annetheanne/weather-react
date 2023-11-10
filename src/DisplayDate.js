import React from "react";

export default function DisplayDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let time = props.date.toLocaleTimeString([], {
    hour: `2-digit`,
    minute: `2-digit`,
  });
  return (
    <span>
      {day} {time}
    </span>
  );
}
