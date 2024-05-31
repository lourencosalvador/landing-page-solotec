import { ReactNode } from "react";

export interface ItemBase {}

export interface ListItemInjectedProps<T extends ItemBase> {
  item: T;
  index: number;
}

export interface ListProps<T extends ItemBase> {
  items: T[];
  classeName?: string
  children: (props: ListItemInjectedProps<T>) => ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}