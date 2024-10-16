import { SerializedStyles } from "@emotion/react";
import CSS from 'csstype'

export type Place={
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: string[];
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: {
      city: string;
      state: string;
      country: string;
      country_code: string;
  }
}
export type FlexBoxProps = {
  flexDirection?: "row" | "column";
  gap?: string | number;
  alignItems?: CSS.Property.AlignItems;
  justifyContent?: CSS.Property.JustifyContent;
  padding?: CSS.Property.Padding;
  width?: CSS.Property.Width;
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
