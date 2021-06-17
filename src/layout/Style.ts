export interface Style {
  "flex-direction":
    "row"
    | "column"
  "align-items":
    "flex-start"
  // | "flex-end"
  // | "center"

  "justify-content":
    "space-between"
  // | "space-around"
  // | "center"
}

export const defaultStyle: Style = {
  "flex-direction": "row",
  "align-items": "flex-start",
  "justify-content": "space-between",
}
