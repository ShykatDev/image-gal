import { useState, useRef } from "react";
import Item from "./Item";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSwappingStrategy,
  arraySwap,
} from "@dnd-kit/sortable";
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
} from "../assets";

const Gallery = ({select, setSelect, contentBoxRef}) => {
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
  return (
    <div
      className="contentBox w-full h-full grid grid-cols-2 grid-rows-8 gap-5 px-5 pb-5 sm:grid-cols-3 sm:grid-row-5 md:grid-cols-4 md:grid-row-4 lg:grid-cols-5 lg:grid-rows-3 sm:px-10"
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
  );
};

export default Gallery;
