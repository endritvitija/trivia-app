import React, { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { useAtom } from "jotai";

import {
  Card,
  CardDescription,
  CardTitle,
  CategoriesText,
  Container,
  Logo,
  WelcomeText,
} from "./styles";
import Button from "../../components/Button/Button";
import Category from "../../components/Category/Category";
import { QuestionScreenNavigationProp } from "../../navigation";
import categoriesData from "../../constants/question-categories.json";
import {
  Categories,
  QuestionCategories,
} from "../../constants/types/categories.type";
import { currentCategoryAtom } from "../../atoms/triviaAtoms";

const HomeScreen = () => {
  const navigation = useNavigation<QuestionScreenNavigationProp>();
  const [currentCategory, setCurrentCategory] = useAtom(currentCategoryAtom);
  const listRef = useRef<FlashList<any>>(null);

  const handleNavigate = useCallback(
    (category: QuestionCategories) => {
      setCurrentCategory(category.label);
      navigation.navigate("Question", {
        categoryId: parseInt(category.value),
        categoryName: category.label,
      });
    },
    [navigation, setCurrentCategory]
  );

  const renderListHeaderComponent = useCallback(() => (
    <>
      <Logo>Trivia</Logo>
      <WelcomeText>Welcome</WelcomeText>
      <Card>
        <CardTitle>Let’s Start Now!</CardTitle>
        <CardDescription>
          Play, Learn and Explore with Exciting Quizzes!
        </CardDescription>
        <Button
          title="General Knowledge"
          size="medium"
          iconName="arrow-right"
          onPress={() =>
            handleNavigate({
              value: Categories.GENERAL_KNOWLEDGE.toString(),
              label: "General Knowledge",
            })
          }
        />
      </Card>
      <CategoriesText>Choose a Quiz Category</CategoriesText>
    </>
  ), [handleNavigate]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<QuestionCategories>) => (
      <Category
        data={item}
        onPress={() => handleNavigate(item)}
      />
    ),
    [handleNavigate]
  );

  const keyExtractor = useCallback(
    (item: QuestionCategories) => item.value.toString(),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{flex: 1}}>
        <FlashList
          ref={listRef}
          data={categoriesData}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderListHeaderComponent}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          estimatedItemSize={7}
          numColumns={1}
        />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
