import axios from "axios";
import axiosInstance from "../api/axiosInstance";

export const getQuestions = async (
  categoryId: number
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get(
      `?amount=4&difficulty=medium&category=${categoryId}&type=boolean`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
