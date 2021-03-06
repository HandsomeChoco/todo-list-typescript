import { BoxProps } from "@mui/material/Box/Box";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode
};

export interface TodoProviderProps extends LayoutProps {
}
export interface GlobalThemeProps extends LayoutProps {
};

export interface Holidays {
  dateKind: string,
  dateName: string,
  isHoliday: "Y" | "N",
  locdate: number,
  seq: number
};

export interface CollapsibleAddItemProps {
  text: string,
  isOpen: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
};

export interface Item {
  id: number,
  isDone?: boolean,
  text?: string,
  beginAt?: string
};

export interface State {
  items: Item[]
};

export interface Action extends Item {
  type: ACTION_TYPE.ADD_ITEM | ACTION_TYPE.DELETE_ITEM | ACTION_TYPE.DONE_JOB,
};

export enum ACTION_TYPE {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  DONE_JOB = 'DONE_JOB'
};

export interface ItemBoxProps extends BoxProps {
  isOpen: boolean|null|undefined
};

export interface CheckCircleProps extends BoxProps {
  isDone: boolean|null|undefined
};

export interface TodoTextProps extends CheckCircleProps {
};