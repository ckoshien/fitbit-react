import React from "react";
import { render, forRange, GRotate, Number } from "./tools";

const App = () => (
  <svg>
    <gradientRect
      width="100%"
      height="100%"
      gradient-type="linear"
      gradient-x1="0"
      gradient-y1="50"
      gradient-x2="0"
      gradient-y2="100%-50"
      gradient-color1="blue"
      gradient-color2="#a6efff"
    />
    <mask id="mask">
      {/* <circle cx="150" cy="150" r="125" /> */}
      <arc
        id="masked"
        x="30"
        y="30"
        width="240"
        height="240"
        fill="#555555"
        arc-width="30"
        start-angle="0"
        sweep-angle="360"
      />
    </mask>
    <svg mask="#mask" width="100%" height="100%"></svg>
    <arc
      x="30"
      y="30"
      width="240"
      height="240"
      fill="#555555"
      arc-width="1"
      start-angle="0"
      sweep-angle="360"
    />
    <arc
      x="60"
      y="60"
      width="180"
      height="180"
      fill="#555555"
      arc-width="1"
      start-angle="0"
      sweep-angle="360"
    />
    <section x="50%" y="50%">
      <section width="95%" height="95%">
        {forRange(1, 12, (i) => (
          <Mark angle={i * 30} length={10} />
        ))}

        {forRange(1, 60, (i) => i % 5 && <Mark angle={i * 6} length={5} />)}
      </section>
      <Number id="heartRate" x="50" y="50" color="white" size="20" />
      <Hand id="hours" size={0.5} color={"white"} />
      <Hand id="minutes" size={0.8} color={"white"} />
      {/* <Hand id="seconds" size={0.8} color={"red"} /> */}
    </section>
  </svg>
);

const Mark = ({ angle, length }) => (
  <GRotate angle={angle}>
    <line x1="0" x2="0" y1="-50%" y2={`-50%+${length}`} fill="#A0A0A0" />
  </GRotate>
);

const Hand = ({ id, size, color }) => (
  <GRotate id={id}>
    <line
      x1="0"
      x2="0"
      y1={-50 * size + "%"}
      y2={10 * size + "%"}
      fill={color}
    />
  </GRotate>
);

render(App);
