export type MuiEvent =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>
  | React.FocusEvent<Element, Element>
  | null;
