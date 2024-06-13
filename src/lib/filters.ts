export enum OrderBy {
  LATEST = "latest",
  RELEVANT = "relevant",
}

export enum Color {
  ALL = "all",
  BLACK_AND_WHITE = "black_and_white",
  BLACK = "black",
  WHITE = "white",
  YELLOW = "yellow",
  ORANGE = "orange",
  RED = "red",
  PURPLE = "purple",
  MAGENTA = "magenta",
  GREEN = "green",
  TEAL = "teal",
  BLUE = "blue",
}

export interface FilterState {
  orderBy: OrderBy;
  color: Color;
}
