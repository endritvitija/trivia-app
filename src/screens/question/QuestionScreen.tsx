import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
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

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const data = await getQuestions(categoryId);
        // Decode HTML entities in questions
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
    if (selectedAnswer !== null) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: selectedAnswer,
      }));
      setSelectedAnswer(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setProgress((prev) => prev + 0.25);
      } else {
        navigation.navigate("Results");
        setProgress(0.25);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <QuestionContainer>
      <QuestionsCountLabel>
        Question {currentQuestionIndex + 1} of {questions.length}
      </QuestionsCountLabel>
      <QuestionText>{questions[currentQuestionIndex]?.question}</QuestionText>

      {questions[currentQuestionIndex]?.incorrect_answers
        .concat(questions[currentQuestionIndex]?.correct_answer)
        .map((answer) => (
          <Answer
            key={answer}
            title={answer}
            selected={selectedAnswer === answer}
            onPress={() => handleAnswerPress(answer)}
          />
        ))}

      <Button
        title="Next"
        iconName="arrow-right"
        size="full"
        style={{ marginTop: 50 }}
        onPress={handleNextQuestion}
      />
    </QuestionContainer>
  );
};

export default QuestionScreen;
