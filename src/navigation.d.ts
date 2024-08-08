import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Question: { categoryId: number, categoryName: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type QuestionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Question"
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  QuestionScreenNavigationProp,
};
