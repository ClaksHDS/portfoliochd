import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleProjectPage = () => {
  let { id } = useParams();

  return (
    <div>
      <Link to='/projects'>all projects</Link>
      {console.log(id)}
    </div>
  );
};

export default SingleProjectPage;
