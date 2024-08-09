import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withTiming,
} from "react-native-reanimated";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAtom } from "jotai";
import he from "he";

import {
  currentQuestionIndexAtom,
  progressAtom,
  questionsAtom,
  selectedAnswerAtom,
  selectedAnswersAtom,
} from "../../atoms/triviaAtoms";
import { getQuestions } from "../../services/triviaService";
import { Categories } from "../../constants/types/categories.type";

import Answer from "../../components/Answer/Answer";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

import { ResultsScreenNavigationProp } from "../../navigation";
import { QuestionContainer, QuestionsCountLabel, QuestionText } from "./styles";
import commonStyles from "../../styles/commonStyles";

const QuestionScreen = () => {
  const [loading, setLoading] = useState(true);

  const [questions, setQuestions] = useAtom(questionsAtom);
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom);
  const [progress, setProgress] = useAtom(progressAtom);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
    currentQuestionIndexAtom
  );
  const [selectedAnswers, setSelectedAnswers] = useAtom(selectedAnswersAtom);

  const navigation = useNavigation<ResultsScreenNavigationProp>();

  const route = useRoute();
  const categoryId = route.params?.categoryId || Categories.GENERAL_KNOWLEDGE;

  /**
   * Animation
   */
  const translateX = useSharedValue(0);

  const animateTransition = () => {
    translateX.value = 0;

    translateX.value = withTiming(
      -300,
      {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      },
      () => {
        translateX.value = 300;
        translateX.value = withTiming(0, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });
      }
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const data = await getQuestions(categoryId);
        // Decode HTML in questions
        const decodedQuestions = data.results.map((question) => ({
          ...question,
          question: he.decode(question.question),
        }));
        setQuestions(decodedQuestions);

        resetQuizState();
      } catch (error) {
        console.error("Failed to fetch questions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [categoryId]);

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setProgress(0.25);
    setSelectedAnswer(null);
  };

  const handleAnswerPress = (title: string) => {
    setSelectedAnswer(title);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: selectedAnswer,
    }));
    setSelectedAnswer(null);
    animateTransition();

    if (currentQuestionIndex < questions.length - 1) {
      setProgress((prev) => prev + 0.25);
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 300);
      return;
    }

    navigation.navigate("Results");
    setProgress(0.25);
  };

  const renderAnwers = () =>
    questions[currentQuestionIndex]?.incorrect_answers
      .concat(questions[currentQuestionIndex]?.correct_answer)
      .map((answer) => (
        <Answer
          key={answer}
          title={answer}
          selected={selectedAnswer === answer}
          onPress={() => handleAnswerPress(answer)}
        />
      ));

  if (loading) {
    return <Loading />;
  }

  return (
    <QuestionContainer>
      <QuestionsCountLabel>
        Question {currentQuestionIndex + 1} of {questions.length}
      </QuestionsCountLabel>
      <Animated.View style={[animatedStyle, commonStyles.minHeight]}>
        <QuestionText>{questions[currentQuestionIndex]?.question}</QuestionText>
        {renderAnwers()}
      </Animated.View>
      <Button
        title="Next"
        iconName="arrow-right"
        size="full"
        style={commonStyles.mt50}
        onPress={handleNextQuestion}
      />
    </QuestionContainer>
  );
};

export default QuestionScreen;
