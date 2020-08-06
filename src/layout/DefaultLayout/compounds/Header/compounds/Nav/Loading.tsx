import React from "react";
import Skeleton from "react-loading-skeleton";

import { DefaultComponent } from "./types";

const Component: DefaultComponent = () => (
  <div className="headerNav">
    <Skeleton width={300} />
  </div>
);
export default Component;
