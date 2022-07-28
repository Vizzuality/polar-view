import { h } from 'preact';

import type { LinkProps } from 'next/link';

export interface AnchorButtonProps {
  theme: 'primary' | 'secondary';
  className?: string;
  containerClassName?: string;
  cut?: 'right-bottom' | 'right-top' | 'left-top' | 'none';
  size?: 'small' | 'medium' | 'large' | 'none';
  component?: h;
}

// Button props
export type ButtonProps = JSX.HtmlAttributes<HTMLButtonElement> &
  AnchorButtonProps & {
    href?: undefined;
  };

// Anchor props
export type AnchorProps = JSX.HtmlAttributes<HTMLAnchorElement> &
  AnchorButtonProps & {
    href?: string;
    disabled?: boolean;
    anchorLinkProps?: LinkProps;
  };

// Input/output options
export type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};
