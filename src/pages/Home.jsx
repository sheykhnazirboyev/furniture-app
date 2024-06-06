// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Part2 from "../component/home/Part2";
import Part1 from "../component/home/Part1";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex items-center justify-center">
          <Part1 />
        </div>
        <Part2 />
      </div>
    );
  }
}