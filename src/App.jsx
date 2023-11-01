import { useState, useRef } from "react";

import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "./Components/Gallery";

function App() {
  const [select, setSelect] = useState([]);
  const contentBoxRef = useRef();

  const notify = () =>
    toast.error(
      `${select.length} ${select.length > 1 ? "items" : "item"} removed 🗑️`,
      {
        autoClose: 3000,
        theme: "dark",
      }
    );

  //Delete item/items--------------------------✅👇
  const deleteItems = () => {
    select.map((item) => {
      contentBoxRef.current.removeChild(item);
    });
    setSelect([]);
    notify();
  };

  return (
    <div className="p-10 bg-blue-50">
      <div className="bg-white rounded-lg mb-5">
        <Header items={select} deleteItemsFun={deleteItems} />

        <Gallery
          contentBoxRef={contentBoxRef}
          select={select}
          setSelect={setSelect}
        />
      </div>

      <small className="text-xs float-right">Submitted by Shykat Raha</small>
      <ToastContainer />
    </div>
  );
}

export default App;
