import { SerializedStyles } from "@emotion/react";

export type FlexBoxProps = {
  flexDirection?: "row" | "column";
  gap?: string | number;
  alignItems?: string;
  justifyContent?: string;
  padding?: string;
  width?: string;
  css?: SerializedStyles;
};

export type HeadingProps = {
  fontSize?: string;
  fontWeight?: string | number;
  letterSpacing?: string;
  color?: string;
  css?: SerializedStyles;
};

export type TextProps = {
  fontSize?: string;
  fontWeight?: string | number;
  letterSpacing?: string;
  color?: string;
  css?: SerializedStyles;
};

export type ImageProps = {
  height?: string;
  width?: string;
  css?: SerializedStyles;
};
