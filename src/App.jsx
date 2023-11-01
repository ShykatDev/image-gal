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
import Item from "./Components/Item";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arraySwap,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import Header from "./Components/Header";

function App() {
  const images = [
    { id: 1, imgSrc: img11 },
    { id: 2, imgSrc: img1 },
    { id: 3, imgSrc: img2 },
    { id: 4, imgSrc: img3 },
    { id: 5, imgSrc: img4 },
    { id: 6, imgSrc: img5 },
    { id: 7, imgSrc: img6 },
    { id: 8, imgSrc: img7 },
    { id: 9, imgSrc: img8 },
    { id: 10, imgSrc: img9 },
    { id: 11, imgSrc: img10 },
  ];

  const [imgLists, setImgLists] = useState(images);
  const [select, setSelect] = useState([]);
  const contentBoxRef = useRef();

  //Drag and Drop Function------------------------✅👇
  const dragFun = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setImgLists((imgs) => {
      const oldInd = imgs.findIndex((i) => i.id === active.id);
      const newInd = imgs.findIndex((i) => i.id === over.id);
      return arraySwap(imgs, oldInd, newInd);
    });
  };

  //Delete item/items--------------------------✅👇
  const deleteItems = () => {
    select.map((item) => {
      contentBoxRef.current.removeChild(item);
    });
    setSelect([]);
  };

  return (
    <div className="p-10 bg-blue-50">
      <div className="bg-white rounded-lg mb-5">
        <Header items={select} deleteItemsFun={deleteItems} />

        <div
          className="contentBox w-full h-full grid grid-cols-2 grid-rows-8 gap-5 px-16 pb-5 sm:grid-cols-3 sm:grid-row-5 md:grid-cols-4 md:grid-row-4 lg:grid-cols-5 lg:grid-rows-3"
          ref={contentBoxRef}
        >
          <DndContext collisionDetection={closestCenter} onDragEnd={dragFun}>
            <SortableContext items={images} strategy={rectSwappingStrategy}>
              {imgLists.map((imgItem, ind) => {
                return (
                  <Item
                    imgItem={imgItem}
                    key={ind}
                    setSelect={setSelect}
                    select={select}
                  />
                );
              })}
            </SortableContext>
          </DndContext>

          <div className="border-dashed rounded-md border-2 flex justify-center items-center flex-col w-full h-40 md:h-full sm:h-full">
            <img src={preview} alt="preview" className="w-1/6 mb-4" />
            <h2 className="font-medium text-xl text-center md:text-xl">
              Add Images
            </h2>
          </div>
        </div>
      </div>

      <small className="text-xs">Submitted by Shykat Raha</small>
    </div>
  );
}

export default App;
