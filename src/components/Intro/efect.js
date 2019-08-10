import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";
import { random } from "lodash";

import "./effect.css";

const MagicOcean = [
  "Hi there dreamer!",
  "We are GitCamp team",
  "We were recently graduate from one the best bootcamp in Turkey",
  "provided by 'Re:Coded' .. ",
  "We were so pleased to be in the Re:Coded family...",

  "Although, there are millions of students waiting out there to learn coding, they hardly find a nice bootcamp.",
  "That's why we are here to help you to find your best bootcamp match! Check out our website and enjoy it!",
  "npm install ...",
  "Happy Hacking!"
];
let index = 0;

function Effect() {
  const [magicName, setMagicName] = useState("Welcome the Coding World");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 8 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 8000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);
  return (
    <div className="Effect">
      <p className="cursor">{name}</p>
    </div>
  );
}

export default Effect;
