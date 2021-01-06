import React from "react";
import { Link } from "react-router-dom";

export default function PageNoteFound() {
  return (
    <>
      <div className="bg-white tm-block mt-5">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="tm-block-title d-inline-block">NO PAGE FOUND</h2>
            <Link to="/" className="nav-link ">
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
