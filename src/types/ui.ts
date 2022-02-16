import { SystemStyleObject } from '@styled-system/css';
import {
  ColorProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type { Theme } from 'styled-system';

export type SystemStyleProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  ShadowProps &
  TypographyProps & {
    gap?: string | number | string[] | number[];
    textTransform?: TextTransform;
    textDecoration?: string;
    textDecorationColor?: string;
    sx?: SystemStyleObject;
  };

export type TextTransform =
  | 'inherit'
  | 'initial'
  | 'unset'
  | 'revert'
  | 'none'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'full-width'
  | 'full-size-kana';
