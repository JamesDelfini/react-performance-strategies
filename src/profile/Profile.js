import React, { useState } from "react";
import LazyParagraph from "./LazyParagraph";

import _ from "lodash/array";

import Headline from "../components/Headline";

import { add } from "../components/util";

import "./Profile.css";

const Profile = () => {
  const [showOnDemand, setShowOnDemand] = useState(false);

  const array = [1, 2, 3];
  _.fill(array, "a");
  console.log(array);
  console.log("add", add(2, 2));
  return (
    <div className="profile">
      <Headline>Profile</Headline>
      <p>Lorem Ipsum</p>
      {showOnDemand && <LazyParagraph />}
      <button onClick={() => setShowOnDemand(true)}>click me</button>
    </div>
  );
};

export default Profile;
