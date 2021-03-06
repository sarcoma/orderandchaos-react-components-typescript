import { ButtonHTMLAttributes, HTMLProps } from 'react'

export interface ITagged extends HTMLProps<any> {
  tag?: string;
}

export interface IColumn extends ITagged {
  columnClass?: string;
  pushClass?: string;
}

export interface ITable extends HTMLProps<any> {
  headerRows?: JSX.Element[][];
  bodyRows?:JSX.Element[][];
}

export interface IPicture extends HTMLProps<any> {
  sources: ISource[];
}

export interface ISource {
  srcSet: string;
  media: string;
}

export interface IButton extends ButtonHTMLAttributes<any>  {
  iconLeft?: SVGElement | JSX.Element
  iconRight?: SVGElement | JSX.Element
}

export interface IRadioButton extends ButtonHTMLAttributes<any>  {
  checked: boolean
}

export interface ILinkButton extends IButton  {
  to: string
}

export interface IField extends HTMLProps<any>, IFormError  {}

export interface IInput extends HTMLProps<any>, IFormError, IFormValid  {}

export interface ITextArea extends HTMLProps<any>, IFormError, IFormValid  {}

export interface ISelect extends HTMLProps<any>, IFormError, IFormValid  {
  options: IOption[];
  initialField: string;
}

export interface IFormError {
  error?: string | null;
}

export interface IFormValid {
  valid?: string | null;
}

export interface ISwitchButton extends ButtonHTMLAttributes<any>, IFormError {
  active: boolean;
}

export interface ISwitchField extends ButtonHTMLAttributes<any>, IFormError {
  active: boolean;
  label: string;
}

export interface IOption {
  name: string;
  value: any;
}
