import { View, Text } from "react-native";
import React from "react";

import { QuestionCategories } from "../../constants/types/categories.type";

import { QuestionCard, QuestionTitle } from "./styles";
import { Feather } from "@expo/vector-icons";

type CategoriesProps = {
  data: QuestionCategories;
  onPress: (categoryId: string) => void;
};

const Category = ({ data, onPress }: CategoriesProps) => {
  return (
    <QuestionCard onPress={() => onPress(data.value)}>
      <QuestionTitle>{data.label}</QuestionTitle>
      <Feather name="arrow-right" size={24} color="#222"/>
    </QuestionCard>
  );
};

export default Category;
