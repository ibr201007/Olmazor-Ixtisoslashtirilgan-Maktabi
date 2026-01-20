import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";

const pages = [
  {
    id: 0,
    title: "Algebra",
    link: "/al",
  },
  { id: 1, title: "Biologiya", link: "/bi" },
  { id: 2, title: "Chizmachilik", link: "/ch" },
  { id: 3, title: "Fizika", link: "/fi" },
  { id: 4, title: "Geometriya", link: "/ge" },
  { id: 5, title: "Informatika", link: "/in" },
  { id: 6, title: "Ingliz tili", link: "/ing" },
  { id: 7, title: "Jismoniy tarbiya", link: "/jt" },
  { id: 8, title: "Kimyo", link: "/ki" },
  { id: 9, title: "Ona tili", link: "/on" },
  { id: 10, title: "Tarix", link: "/ta" },
  { id: 11, title: "Texnologiya", link: "/te" },
];

const PageContent = ({ title, link }) => (
  <div className="space-y-4 px-4 w-full">
    <h1 className="text-3xl md:text-5xl font-bold text-center">{title}</h1>

    <div
      className="flex flex-col lg:flex-row items-center justify-center
                 py-10 md:py-24
                 space-y-10 lg:space-y-0 lg:space-x-44 text-white"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
        alt=""
        className="w-32 md:w-48"
      />

      <div className="space-y-4 text-center lg:text-left">
        <p className="text-xl md:text-3xl font-semibold">Ism: Toshmat</p>
        <p className="text-xl md:text-3xl font-semibold">
          Familiya: Teshaboyev
        </p>
        <p className="text-xl md:text-3xl font-semibold">Yosh: 35</p>

        <NavLink to={link}>
          <div
            className="mx-auto lg:mx-0
                       border border-white bg-white text-black
                       rounded-2xl p-2 w-56 md:w-60
                       hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <div className="flex gap-3 items-center justify-center">
              <p className="text-xl md:text-3xl font-semibold">Batafsil</p>
              <FaArrowRightToBracket size={32} />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  </div>
);

const Page = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + pages.length) % pages.length);
  };

  const prevIndex = (index - 1 + pages.length) % pages.length;
  const nextIndex = (index + 1) % pages.length;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 260 : -260,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 3,
    },
    exit: (dir) => ({
      x: dir < 0 ? 260 : -260,
      opacity: 0,
      scale: 0.92,
      zIndex: 1,
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="relative w-full max-w-[1000px] h-[520px] md:h-[560px]">

        {/* PREV */}
        <motion.div
          className="absolute inset-0 rounded-[40px] flex items-center justify-center backdrop-blur-md"
          style={{
            background: "rgba(59,130,246,0.25)",
            x: -180,
            scale: 0.9,
            zIndex: 1,
          }}
        >
          <PageContent {...pages[prevIndex]} />
        </motion.div>

        {/* NEXT */}
        <motion.div
          className="absolute inset-0 rounded-[40px] flex items-center justify-center backdrop-blur-md"
          style={{
            background: "rgba(59,130,246,0.25)",
            x: 180,
            scale: 0.9,
            zIndex: 1,
          }}
        >
          <PageContent {...pages[nextIndex]} />
        </motion.div>

        {/* CURRENT */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[40px] shadow-2xl
                       flex items-center justify-center backdrop-blur-xl"
            style={{ background: "rgba(59,130,246,0.45)" }}
          >
            <PageContent {...pages[index]} />
          </motion.div>
        </AnimatePresence>

        {/* LEFT */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2
                     w-12 md:w-14 h-12 md:h-14 rounded-full
                     bg-blue-600 text-white text-2xl
                     flex items-center justify-center shadow-xl z-50"
        >
          ‹
        </button>

        {/* RIGHT */}
        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2
                     w-12 md:w-14 h-12 md:h-14 rounded-full
                     bg-blue-600 text-white text-2xl
                     flex items-center justify-center shadow-xl z-50"
        >
          ›
        </button>

      </div>
    </div>
  );
};

export default Page;
