export type BaseCell = {
  selected: boolean;
  flagged: boolean;
};

export type BombCell = {
  type: "bomb";
} & BaseCell;

export type SafeCell = {
  type: "safe";
  adjacentBombs: number;
} & BaseCell;


export type GameCell = BombCell | SafeCell;

export type BoardSize = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
export type BoardWidth = BoardSize;
export type BoardHeight = BoardSize;


export type GridRow = GameCell[];

export type GameBoard<Width extends BoardWidth, Height extends BoardHeight> = {
  width: Width;
  height: Height;
  mines: number;
  cells: GridRow[];
};
