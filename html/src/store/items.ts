import { ItemData } from "../typings";

export const Items: {
  [key: string]: ItemData | undefined;
} = {
  water: {
    close: false,
    label: "VODA",
    stack: true,
    usable: true,
  },
  burger: {
    close: false,
    label: "BURGR",
    stack: false,
    usable: false,
  },
};
