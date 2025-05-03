import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h2 data-aos="fade-left" className="font-bold text-xl">
        Find Us On
      </h2>
      <div className="flex flex-col gap-3 mt-3">
        <Link
          data-aos="fade-left"
          to="https://www.facebook.com/rabularafatpappu.pappu"
          target="_blank"
        >
          <button className=" w-full flex gap-2 cursor-pointer items-center rounded-sm text-start border border-blue-500 px-4 py-2 bg-slate-50 hover:bg-blue-100">
            <FaFacebook size={24} style={{ color: "blue" }} />
            Facebook
          </button>
        </Link>
        <Link
          data-aos="fade-left"
          to="https://x.com/rifathasan1211"
          target="_blank"
        >
          <button
            data-aos="fade-left"
            className=" w-full flex gap-2 cursor-pointer items-center rounded-sm text-start border px-4 py-2 bg-slate-50 hover:bg-slate-100"
          >
            <BsTwitterX size={24} />
            Twitter
          </button>
        </Link>
        <Link
          data-aos="fade-left"
          to="https://www.instagram.com/rifat_hasan_9999/"
          target="_blank"
        >
          <button
            data-aos="fade-left"
            className=" w-full flex gap-2 cursor-pointer items-center rounded-sm text-start border border-red-500 px-4 py-2 bg-slate-50 hover:bg-red-100"
          >
            <BsInstagram size={24} style={{ color: "red" }} />
            Instagram
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
