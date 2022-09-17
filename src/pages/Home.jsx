import {
  MainDiv,
  DdayDiv,
  EventContainerDiv,
  EventSpan,
  BlackBg,
} from "../styledComponent";
import React, { useState } from "react";
import { events } from "../data";
import EventItem from "./EventItem";
import Timer from "./Timer";
import blood3 from "../images/blood3.png";
import blood4 from "../images/blood4.png";
// 이벤트 data 불러오기,

const Home = () => {
  return (
    <MainDiv>
      {/* d-day 요소들 */}
      <DdayDiv>
        <BlackBg />
        <Timer />
      </DdayDiv>

      {/* event 요소들 */}
      <EventContainerDiv>
        <EventSpan>
          진행중인 <span>이벤트</span>
        </EventSpan>
        <img
          src={blood3}
          style={{ position: "absolute", top: "-20px", right: "25px" }}
        ></img>
        <img
          src={blood4}
          style={{ position: "absolute", bottom: "-100px", right: "25px" }}
        ></img>
        {/* data.js에 저장된 event들 로딩 */}
        {events.map((event) => {
          return <EventItem key={event.id} {...event} />;
        })}
      </EventContainerDiv>
    </MainDiv>
  );
};
export default Home;
