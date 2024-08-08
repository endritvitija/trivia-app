import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/triviaService";
import { useRoute } from "@react-navigation/native";
import { Categories } from "../../constants/types/categories.type";

const QuestionScreen = () => {
  const [question, setQuestion] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  const route = useRoute();

  const categoryId = route.params?.category || Categories.GENERAL_KNOWLEDGE;

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await getQuestions(categoryId);
      console.log(data.results)
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

  return (
    <View>
      <Text>QuestionScreen</Text>
    </View>
  );
};

export default QuestionScreen;
