import React, { useState } from "react";
import { foods } from "../data";
import Modal from "./Modal";
import { DayContainerDiv, FoodCard, FoodMap } from "../styledComponent";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  pushData,
  findData,
} from "../utils";
import { FoodComponentDiv } from "./Elements";
import FoodModal from "./FoodModal";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const Food = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  const [selectedDay, setSelectedDay] = useState('월');
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  return (
    <>
      
      <FoodMap></FoodMap>
      {/* 데이터 추가 */}
      
      
      {pushData(
        foods,
        FoodComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID
      )}
      
      
     
      
      {showModal && (
        <FoodModal
          setShowModal={setShowModal}
          data={findData(foods, selectedID)}
        ></FoodModal>
      )}
    </>
  );
};

export default Food;
