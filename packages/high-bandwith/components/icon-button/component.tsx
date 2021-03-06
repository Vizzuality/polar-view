import React from 'react';
import cx from 'classnames';
import THEME from './constants';
import { IconButtonProps } from './types';

const CUT_MAP = {
  'right-bottom': 'cut-r-b',
  'right-top': 'cut-r-t',
  'left-top': 'cut-l-t',
  none: '',
};

function buildClassName({ className, disabled, theme, cut }) {
  return cx({
    'flex items-center justify-center text-xs font-bolder p-2 h-6': true,
    [THEME[theme]]: true,
    [CUT_MAP[cut]]: true,
    [className]: !!className,
    'opacity-50 pointer-events-none': disabled,
  });
}

export const IconButton: React.FC<IconButtonProps> = ({
  theme = 'primary',
  className,
  disabled,
  cut = 'right-bottom',
  icon: Icon,
  iconSize,
  iconStroke,
  ...restProps
}: IconButtonProps) => (
  <span className={CUT_MAP[cut]}>
    <button
      type="button"
      className={buildClassName({
        className,
        disabled,
        theme,
        cut,
      })}
      disabled={disabled}
      {...restProps}
    >
      <Icon stroke={iconStroke} size={iconSize} />
    </button>
  </span>
);

export default IconButton;
