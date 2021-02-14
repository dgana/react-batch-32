import React, { Fragment } from "react";

const ArrayMap = ({ data, children }) =>
  data.map((x, i) => <Fragment key={i}>{children(x, i)}</Fragment>);

export default ArrayMap;
