import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Question: { categoryId: number; categoryName: string };
  Results: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type QuestionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Question"
>;

type ResultsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Results"
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  QuestionScreenNavigationProp,
  ResultsScreenNavigationProp,
};
