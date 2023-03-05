import { DataProps } from "./Fetch";

export interface SearchPropertiesProps {
  properties: DataProps[]
}

export interface SearchInputProps {
  setInput: (el: string) => void
}