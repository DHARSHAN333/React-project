import React, { useState } from "react";
import './Table.css'



const Table = ({ day }) => {
  return (
    <table className="tab">
      <tbody>
        <tr>
          <td>Fitness Class</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>William G. Stewart</td>
        </tr>
        <tr>
          <td>Muscle Training</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Boyd C. Harris</td>
        </tr>
        <tr>
          <td>Body Building </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Boyd C. Harris</td>
        </tr>
        <tr>
          <td>Yoga Training Class </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Hector T. Daigle</td>
        </tr>
        <tr>
          <td>Advanced Training </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Bret D. Bowers</td>
        </tr>
      </tbody>
    </table>
  )
}


export default Table;
