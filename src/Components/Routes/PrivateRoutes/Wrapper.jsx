import React from "react";
import { useParams } from "react-router";
import PrivateCourseRoute from "./PrivateCourseRoute";

const Wrapper = ({ children }) => {
  const { id } = useParams();
  return <PrivateCourseRoute courseId={id}>{children}</PrivateCourseRoute>;
};

export default Wrapper;
