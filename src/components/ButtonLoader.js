import React from "react";
import { ClipLoader } from "react-spinners";

const ButtonLoader = (props) => {
  const { loading, title, className, onClick } = props;
  return (
    <div>
      <button className={className} onClick={onClick} disabled={loading}>
        {loading && <ClipLoader size={20} color="#fff" />}
        {!loading && <span>{title}</span>}
      </button>
    </div>
  );
};

export default ButtonLoader;
