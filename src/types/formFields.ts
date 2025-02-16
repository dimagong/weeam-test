// - numeric (number field);
// - string (text field);
// - multi-line (text area);
// - boolean (checkbox field);
// - date (date field);
// - enum (radio buttons).

//The application should also be able to set the title of the form, as well as the number and text of  the buttons (for example, OK, Cancel, Apply).

export enum FieldTypes {
  numeric = "number",
  string = "text",
  multiLine = "textarea",
  boolean = "checkbox",
  date = "date",
  enum = "radio",
}

export enum ButtonNameTypes {
  ok = "OK",
  cancel = "Cancel",
  apply = "Apply",
}

export interface IField {
  label?: string; 
  type: `${FieldTypes}`;
  placeholder?: string;
  autofocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: string;
}

export interface IButton {
  name: ButtonNameTypes;
}

export interface IFormFields {
  items: IField[];
  title?: string;
  buttons?: IButton[];
}
