import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <div className="px-4 md:px-10 lg:px-[150px] py-3">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <NavLink to="/">
              <div className="flex gap-2 items-center">
                <img
                  src="https://static10.tgstat.ru/channels/_0/ef/efc24d28425fddf68c6a97465ad9f110.jpg"
                  className="w-14 md:w-20"
                  alt="logo"
                />
                <img
                  src="https://portal.piima.uz/images/icons/logo-name-new-blue.svg"
                  className="w-24 md:w-32"
                  alt="logo-name"
                />
              </div>
            </NavLink>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-12 items-center">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-xl"
            >
              <IoMdMenu size={26} />
              <span className="text-xl font-semibold">Katalog</span>
            </button>

            <NavLink to="/a" className="flex gap-2 items-center text-blue-900">
              <BsFillTelephoneFill />
              <span className="text-xl font-semibold">Aloqa</span>
            </NavLink>

            <NavLink to="/j" className="flex gap-2 items-center text-blue-900">
              <FaLocationDot />
              <span className="text-xl font-semibold">Joylashuv</span>
            </NavLink>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-blue-900"
          >
            <IoMdMenu size={34} />
          </button>
        </div>
      </div>

      {/* SIDEBAR (KATALOG) */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-blue-900 text-white p-6 
        z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* LOGO */}
        <div className="text-center">
          <img
            src="https://portal.piima.uz/images/icons/logo-icon-new.svg"
            className="w-24 mx-auto"
            alt=""
          />
          <img
            src="https://portal.piima.uz/images/icons/logo-name-new.svg"
            className="w-32 mx-auto mt-2"
            alt=""
          />
        </div>

        {/* MENU */}
        <h2 className="text-2xl font-bold text-center my-6">KATALOG</h2>

        <ul className="flex flex-col gap-4 text-center text-lg font-semibold">
          <NavLink onClick={() => setOpen(false)} to="/">Bosh sahifa</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/sm">O‘quvchilar TOP ligi</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/tm">O‘qituvchilar TOP ligi</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/shar">Maktab sharoiti</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/qa">Qabulga yozilish</NavLink>
        </ul>

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5"
        >
          <IoExit size={30} />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </div>
  );
};

export default Navbar;
