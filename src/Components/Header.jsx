import React from "react";
import { motion } from "framer-motion";

const Header = ({ items, deleteItemsFun }) => {
  return (
    <motion.header
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="py-8 px-5 mb-5 border-b-2 sm:px-10"
    >
      {items.length === 0 ? (
        <h1 className="font-bold text-sm sm:text-xl">Gallery</h1>
      ) : (
        <div className="flex justify-between item-center">
          <h1 className="font-bold text-sm sm:text-xl">
            {" "}
            <input type="checkbox" className="scale-125" checked />{" "}
            {items.length}{" "}
            {items.length === 1 ? "File Selected" : "Files Selected"}
          </h1>
          <p
            className="text-red-600 font-bold text-sm sm:text-xl cursor-pointer"
            onClick={deleteItemsFun}
          >
            {items.length === 1 ? "Delete File" : "Delete Files"}
          </p>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
