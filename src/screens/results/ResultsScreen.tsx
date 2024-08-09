import React, { useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useAtom } from "jotai";
import { useNavigation } from "@react-navigation/native";

import {
  Card,
  Logo,
  PerformanceText,
  ResultsContainer,
  ResultText,
  SubTitle,
  Title,
} from "./styles";
import Button from "../../components/Button/Button";
import { questionsAtom, selectedAnswersAtom } from "../../atoms/triviaAtoms";
import { HomeScreenNavigationProp } from "../../navigation";
import { QuizResultText } from "../../constants/types/results.type";

const ResultsScreen = () => {
  const animation = useRef<LottieView>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [questions] = useAtom(questionsAtom);
  const [selectedAnswers] = useAtom(selectedAnswersAtom);

  const quizResultTextMap: { [key: number]: QuizResultText } = {
    1: QuizResultText.NotPassed,
    2: QuizResultText.TryAgain,
    3: QuizResultText.GoodResults,
    4: QuizResultText.ExcellentResult,
  };

  const correctAnswers = questions.filter(
    (q, index) => q.correct_answer === selectedAnswers[index]
  ).length;

  const lottieSource =
    correctAnswers > 2
      ? require("../../assets/images/success.json")
      : require("../../assets/images/failed.json");

  const lottieSize = correctAnswers > 2 ? 100 : 50;
  const lottieMarginRight = correctAnswers > 2 ? 0 : 20;

  const getQuizResultText = (score: number): QuizResultText => {
    return quizResultTextMap[score] || QuizResultText.NotPassed;
  };

  return (
    <ResultsContainer>
      <Logo>Trivia</Logo>
      <Title>Your Detailed Report</Title>
      <SubTitle>Check your detailed summary report.</SubTitle>

      <Card>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: lottieSize,
            height: lottieSize,
            marginRight: lottieMarginRight,
            backgroundColor: "#fff",
          }}
          source={lottieSource}
        />
        <View>
          <ResultText>{getQuizResultText(correctAnswers)}</ResultText>
          <PerformanceText>
            Your Overall Performance Score is{" "}
            {`${correctAnswers}/${questions.length}`}
          </PerformanceText>
        </View>
      </Card>

      <Button
        title="Home"
        size="full"
        style={{ marginTop: 100 }}
        onPress={() => navigation.navigate("Home")}
      />
    </ResultsContainer>
  );
};

export default ResultsScreen;
