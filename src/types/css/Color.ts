type HexColor = `#${string}`;
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

type RaphaelColor = HexColor | RGB | RGBA;

export type { HexColor, RGB, RGBA };

export type { RaphaelColor };
