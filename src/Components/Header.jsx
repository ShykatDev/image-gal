import React from "react";

const Header = ({ items, deleteItemsFun }) => {
  return (
    <header className="py-8 px-16 mb-5 border-b-2">
      {items.length === 0 ? (
        <h1 className="font-bold text-xl">Gallery</h1>
      ) : (
        <div className="flex justify-between item-center">
          <h1 className="font-bold text-xl">
            {" "}
            <input type="checkbox" className="scale-125" checked />{" "}
            {items.length}{" "}
            {items.length === 1 ? "File Selected" : "Files Selected"}
          </h1>
          <p
            className="text-red-600 font-bold text-xl cursor-pointer"
            onClick={deleteItemsFun}
          >
            {items.length === 1 ? "Delete File" : "Delete Files"}
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;