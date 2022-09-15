import styled from "styled-components";
import background from "./images/background.png";

// 메인 화면 외에 여백은 검게 처리하기 위한 가장 바깥쪽 div
export const AppContainer = styled.div`
  background-color: black;
`;

// 가운데 정렬을 위한 바깥쪽 div
export const OuterDiv = styled.div`
  width: 425px;
  margin: 0 auto;
  text-align: center;
  background-color: black;
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
`;

// home page의 기본 구성요소들
export const HeaderDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.67);
  padding-bottom: 10px;
`;

export const HeaderLogo = styled.img`
  text-align: center;
  padding: 40px 30px 20px 30px;
  max-width: 100%;
`;

export const MainDiv = styled.div``;

export const FooterDiv = styled.div`
  padding: 10% 0;
  text-align: center;
`;

export const Nav = styled.nav`
  width: 100%;
`;

// nav의 list들을 가로 정렬 하기 위한 ul
export const FlexUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;

export const Li = styled.li``;

// d-day를 위한 divs
export const DdayDiv = styled.div`
  width: 100%;

  color: white;
  text-align: center;
`;

export const DdayTitle = styled.div``;
export const DdayTimer = styled.div``;

// event를 위한 divs
export const EventContainerDiv = styled.div`
  text-align: left;
`;

export const EventSpan = styled.span`
  margin-left: 3%;
`;

export const EventHeaderDiv = styled.div`
  margin: 5% 0 3% 7%;
  display: flex;
  justify-content: left;
`;
export const EventTitleDiv = styled.div``;
export const EventDateDiv = styled.div``;
export const EventPosterDiv = styled.div`
  width: 90%;
  margin: 0 5%;
  padding-bottom: 100%;
  background-color: white;
`;

// 요일을 위한 divs
export const DayContainerDiv = styled.div`
  display: flex;
  justify-content: right;
  width: 90%;
  margin: 0 5%;
`;

export const DayDiv = styled.div`
  margin: 1px;
`;

// 모달 포지셔닝을 위한 divs
export const ModalOuterDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalInnerDiv = styled.div`
  height: 60%;
  width: 80%;
  background-color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 5px;
`;


//푸드트럭


export const FoodMap = styled.div`
width: 345px;
height: 400px;
background: white;
margin: 0 auto;
`
export const FoodCard = styled.div`
height: 74px;
width: 345px;
left: 35px;
top: 600px;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
color: black;
margin: 0 auto;
`

export const FoodCardNumber = styled.div`
height: 40px;
width: 40px;
border-radius: 4px;
background-color:  #A30000;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

export const FoodCardName = styled.div`
color: black;
width: 150px;
text-align: start;
`
export const FoodCardDetail = styled.div`
width: 50;
color: black;
`

export const FoodModalPopup = styled.div`
height: 541px;
width: 317px;
left: 51px;
top: 186px;
border-radius: 7px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid white;
background-color: black;
`

export const FoodImg = styled.div`
height: 218px;
width: 243px;
left: 88px;
top: 246px;
border-radius: 3px;
background-color: white;
margin: 0 auto;
margin-top: 60px;
`

export const FoodName = styled.div`
height: 26px;
width: 102px;
left: 157px;
top: 460px;
border-radius: nullpx;
color: white;

`

