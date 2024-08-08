import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/triviaService";
import { useRoute } from "@react-navigation/native";
import { Categories } from "../../constants/types/categories.type";
import { QuestionContainer, QuestionsCountLabel, QuestionText } from "./styles";
import Answer from "../../components/Answer/Answer";
import Button from "../../components/Button/Button";

const QuestionScreen = () => {
  const [question, setQuestion] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const route = useRoute();

  const categoryId = route.params.categoryId || Categories.GENERAL_KNOWLEDGE;

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await getQuestions(categoryId);
      setQuestion(data.results);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAnswerPress = (title: string) => {
    setSelectedAnswer(title);
  };

  const handleNextQuestion = () => {};

  return (
    <QuestionContainer>
      <QuestionsCountLabel>Questions 1 of 4</QuestionsCountLabel>
      <QuestionText>{question[0]?.question}</QuestionText>

      <Answer
        title="Correct"
        selected={selectedAnswer === "Correct"}
        onPress={() => handleAnswerPress("Correct")}
      />
      <Answer
        title="Incorrect"
        selected={selectedAnswer === "Incorrect"}
        onPress={() => handleAnswerPress("Incorrect")}
      />

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
