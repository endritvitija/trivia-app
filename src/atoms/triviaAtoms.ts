import { atom } from "jotai";

export const currentCategoryAtom = atom<string | null>(null);
export const progressAtom = atom<number>(0);
export const questionsAtom = atom<QuizQuestion[]>([]);
export const selectedAnswerAtom = atom<string | null>(null);
export const currentQuestionIndexAtom = atom<number>(0);
export const selectedAnswersAtom = atom<{ [key: number]: string }>({});