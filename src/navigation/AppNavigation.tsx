import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation";

import HomeScreen from "../screens/home/HomeScreen";
import QuestionScreen from "../screens/question/QuestionScreen";
import ResultsScreen from "../screens/results/ResultsScreen";

import CustomHeader from "../components/CustomHeader/CustomHeader";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={({ route }) => ({
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            header: () => <CustomHeader />,
          })}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
