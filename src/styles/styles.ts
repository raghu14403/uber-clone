import styled from "@emotion/styled";
import { FlexBoxProps, HeadingProps, ImageProps, TextProps } from "../types";
import { css } from "@emotion/react";

export const FlexBox = styled.div<FlexBoxProps>(
  ({
    flexDirection,
    gap,
    alignItems,
    justifyContent,
    padding,
    width,
    ...props
  }) => [
    {
      display: "flex",
      alignItems,
      justifyContent,
      flexDirection,
      gap,
      padding,
      width,
    },
    props.css ?? css({}),
  ]
);

export const HeadingText = styled.span<HeadingProps>(
  ({
    fontSize = "32px",
    fontWeight = "600",
    letterSpacing,
    color,
    ...props
  }) => [
    {
      fontSize,
      fontWeight,
      letterSpacing,
      color,
    },
    props.css ?? css({}),
  ]
);

export const PlainText = styled.span<TextProps>(
  ({
    fontSize = "16px",
    fontWeight = "400",
    letterSpacing,
    color,
    ...props
  }) => [
    {
      fontSize,
      fontWeight,
      letterSpacing,
      color,
    },
    props.css ?? css({}),
  ]
);

export const Image = styled.img<ImageProps>(({ height, width, ...props }) => [
  {
    height,
    width,
  },
  props.css ?? css({}),
]);
