import React, { useContext } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DetailCard from "../components/UI/DetailCard";
import { useNavigate } from "react-router-dom";

function Country() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="py-2 px-sm-3 rounded px-5">
      <button
        onClick={back}
        className=" darkbg border-0 rounded-1 px-3 d-flex align-items-center gap-2 py-2"
      >
        <HiArrowNarrowLeft size={20} />
        <span>Back</span>
      </button>
      <DetailCard />
    </div>
  );
}

export default Country;
