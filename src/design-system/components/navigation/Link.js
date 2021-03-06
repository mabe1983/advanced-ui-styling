import React from "react";
import styled from "styled-components";
import { Link as RRLink } from "react-router-dom";
import Box from "../layout/Box";

const GenericLink = ({ to, ...rest }) =>
  to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/) ? (
    <a href={to} {...rest} />
  ) : (
    <RRLink to={to} {...rest} />
  );

export default GenericLink;
