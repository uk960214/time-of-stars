import { PropsWithChildren } from "react";
import * as S from "./Mission.style";

interface QuestProps {
  title: string;
  answer: any;
}

function Mission({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>;
}

function Title({ children }: PropsWithChildren) {
  return <S.MissionTitle>{children}</S.MissionTitle>;
}

function Quest({ title, answer }: PropsWithChildren<QuestProps>) {
  console.log(answer);
  return (
    <S.Container>
      <S.QuestTitle>{title}</S.QuestTitle>
      <S.AnswerContainer>
        <S.AnswerButton>정답보기</S.AnswerButton>
        <S.Answer>{answer}</S.Answer>
      </S.AnswerContainer>
    </S.Container>
  );
}

Mission.Title = Title;
Mission.Quest = Quest;

export default Mission;
