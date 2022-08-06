import { ReactComponent as Stage0 } from "./puzzleAnswers/stage0.svg";
import { ReactComponent as Stage1 } from "./puzzleAnswers/stage1.svg";
import { ReactComponent as Stage2 } from "./puzzleAnswers/stage2.svg";
import { ReactComponent as Stage3 } from "./puzzleAnswers/stage3.svg";

const ANSWERS = [
  {
    title: "편지를 쓰자 - 1",
    quests: [
      { quest: "OO의 침략으로 힘든 상황이겠지만", answer: "몽골" },
      { quest: "당신이 심은 OOOO도 건강히 잘 자랐답니다.", answer: "은행나무" },
    ],
  },
  {
    title: "편지를 보내자 - 1",
    quests: [
      { quest: "편지를 어느 연도로 보내야 할까", answer: "688" },
      { quest: "별자리로 편지를 보낼 날짜를 알아내자", answer: <Stage0 /> },
    ],
  },
  {
    title: "3. 고려궁지로",
    quests: [{ quest: "성곽이 파괴된 연도는 언제일까", answer: "1270" }],
  },
  {
    title: "5. 인연의 시작",
    quests: [{ quest: "어디로 갈까?", answer: "외규장각" }],
  },
  {
    title: "6. 외규장각으로",
    quests: [
      { quest: "준의 시대를 알 수 있는 안내판을 찾아보자", answer: "병인양요" },
      { quest: "병인양요 때 무엇이 약탈 당했을까?", answer: "어람용 의궤" },
    ],
  },
  {
    title: "편지를 쓰자 - 2",
    quests: [
      { quest: "O님께", answer: "준" },
      { quest: "곧 OOOO라는 사건이 일어날 것입니다.", answer: "병인양요" },
      { quest: "OOO OO를 안전한 곳에 보관해주세요.", answer: "어람용 의궤" },
    ],
  },
  {
    title: "편지를 보내자 - 2",
    quests: [
      { quest: "편지를 어느 연도로 보내야 할까?", answer: "1866" },
      { quest: "별자리로 편지를 보낼 날짜를 알아내자.", answer: <Stage1 /> },
    ],
  },
  {
    title: "8. 3.1운동 기념비 앞에서",
    quests: [
      {
        quest: "여자가 사는 시대를 알 수 있는 안내판을 찾아보자",
        answer: "삼일운동",
      },
    ],
  },
  {
    title: "편지를 쓰자 - 3",
    quests: [
      { quest: "O님께", answer: "연" },
      { quest: "곧 O.OOO이 일어날 것입니다.", answer: "삼일운동" },
      { quest: "제가 살고 있는 OOOO이 생겨나고,", answer: "대한민국" },
    ],
  },
  {
    title: "편지를 보내자 - 3",
    quests: [{ quest: "어느 날짜로 편지를 보내야 할까?", answer: <Stage2 /> }],
  },
  {
    title: "편지를 쓰자 - 4",
    quests: [
      { quest: "O님께", answer: "준" },
      { quest: "연님은 현재 OOOOO 상황 속에서", answer: "일제강점기" },
      { quest: "OOOO와 관련된 중요한 정보가 있습니다.", answer: "병인양요" },
    ],
  },
  {
    title: "편지를 보내자 - 4",
    quests: [{ quest: "어느 날짜로 편지를 보내야 할까?", answer: <Stage3 /> }],
  },
] as const;

export default ANSWERS;
