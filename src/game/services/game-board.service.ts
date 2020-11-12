import type { BoardWidth, BoardHeight, GameBoard, GameCell } from "../core.types";

export const createBoard = <Width extends BoardWidth, Height extends BoardHeight>(width: Width, height: Height): GameBoard<Width, Height> => {
  return { width, height: 0, mines: 0, cells: [] };
};

export const isInBounds = <Width extends BoardWidth, Height extends BoardHeight>(gameBoard: GameBoard<Width, Height>, x: number, y: number): boolean => {
  return false;
};
