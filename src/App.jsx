import { useState, useRef } from "react";
import {
  img1,
  img10,
  img11,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  preview,
} from "./assets";

function App() {
  // const [selection, setSelection] = useState(false);
  const [items, setItems] = useState([]);

  const container = useRef();

  const deleteByValue = (value) => {
    setItems((oldValues) => {
      return oldValues.filter((fruit) => fruit !== value);
    });
  };

  const selectItem = (e) => {
    if (e.target.className === "selectBox") {
      if (e.target.checked == true) {
        setItems((current) => [...current, e.target.parentNode]);

        e.target.parentNode.classList.add("selected");
      } else {
        deleteByValue(e.target.parentNode);
        e.target.parentNode.classList.remove("selected");
      }
    }
  };

  const deleteItems = () => {
    items.map((item) => {
      container.current.removeChild(item);
    });

    setItems([]);
  };
  console.log(items);
  return (
    <div className="p-4 bg-blue-50 h-screen w-screen">
      <div className=" bg-white border rounded-lg">
        <header className="py-8 px-16 mb-5 border-b-2">
          {items.length === 0 ? (
            <h1 className="font-medium text-xl">Gallery</h1>
          ) : (
            <div className="flex justify-between item-center">
              <h2 className="font-medium">
                {" "}
                <input type="checkbox" checked /> {items.length}{" "}
                {items.length === 1 ? "File Selected" : "Files Selected"}
              </h2>
              <p
                className="text-red-600 font-regular cursor-pointer"
                onClick={deleteItems}
              >
                {items.length === 1 ? "Delete File" : "Delete Files"}
              </p>
            </div>
          )}
        </header>

        <div
          ref={container}
          className="w-screen h-full grid grid-cols-5 grid-rows-3 gap-5 px-16 pb-5"
        >
          <div className="item col-span-2 row-span-2" onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img11} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img1} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img2} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img3} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img4} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img5} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img6} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img7} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img8} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img9} />
          </div>
          <div className="item " onClick={selectItem}>
            <input type="checkbox" className="selectBox" />
            <img src={img10} />
          </div>
          <div className="border-dashed rounded-md border-2 flex justify-center items-center flex-col">
            <img src={preview} alt="preview" className="w-1/6 mb-4" />
            <h2 className="font-medium text-2xl text-center">Add Images</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
