import axiosInstance from "../../api/axiosInstance";
import { getQuestions } from "../triviaService";

jest.mock("../../api/axiosInstance");

describe("getQuestions", () => {
  it("fetches questions from the API and returns them", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            category: "General Knowledge",
            type: "multiple",
            difficulty: "easy",
            question: "What is the capital of France?",
            correct_answer: "Paris",
            incorrect_answers: ["London", "Berlin", "Madrid"],
          },
        ],
      },
    };

    (axiosInstance.get as jest.Mock).mockResolvedValue(mockResponse);

    const questions = await getQuestions(9);

    expect(axiosInstance.get).toHaveBeenCalledTimes(1);
    expect(questions).toEqual(mockResponse.data);
  });
});
