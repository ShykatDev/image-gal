/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Item = ({ imgItem, setSelect }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: imgItem.id });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const [selectItem, setSelectItem] = useState(false);

  //Multiple items selection--------------------------✅👇
  const itemSelection = (e) => {
    if (e.target.checked == true) {
      setSelect((current) => [...current, e.target.parentNode]);
      setSelectItem(true);
    } else {
      setSelect((oldEl) => {
        return oldEl.filter((el) => el !== e.target.parentNode);
      });
      setSelectItem(false);
    }
  };

  return (
    <div className={selectItem ? "itemBox selectedBox" : "itemBox"}>
      <input type="checkbox" className="checkBox" onClick={itemSelection} />

      <button
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={styles}
        className="item"
      >
        <img src={imgItem.imgSrc} alt="imgItem" className="imageItem" />
      </button>
    </div>
  );
};

export default Item;
