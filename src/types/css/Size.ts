type Percentage = `${number}%`;
type Pixel = `${number}px`;
type Rem = `${number}rem`;
type ViewportWidth = `${number}vw`;
type ViewportHeight = `${number}vh`;
type Point = `${number}pt`;
type FitContent = `fit-content`;
type MatchParent = `100%`;

type RaphaelSize =
  | Percentage
  | Pixel
  | Rem
  | ViewportWidth
  | ViewportHeight
  | Point
  | FitContent
  | MatchParent;

export type {
  Percentage,
  Pixel,
  Rem,
  ViewportWidth,
  ViewportHeight,
  Point,
  FitContent,
  MatchParent,
};

export type { RaphaelSize };
