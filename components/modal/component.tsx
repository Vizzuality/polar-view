import React, { FC, useCallback } from 'react';

import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';
import { SpringOptions } from 'popmotion';

interface MenuItem {
  text?: string;
  value?: string;
}
export interface ModalProps extends TippyProps {
  items: MenuItem[];
  maxWidth?: string | number;
  children?: React.ReactElement;
  onItemClick?: (item: MenuItem) => boolean | null;
}

export const Modal: FC<ModalProps> = ({
  items,
  maxWidth = 250,
  children,
  onItemClick,
  placement = 'right-end',
  content,
  arrow = true,
  ...props
}: ModalProps) => {
  const springConfig: SpringOptions = { damping: 15, stiffness: 300 };
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(0.95, springConfig);
  const [isVisible, setIsVisible] = React.useState(false);
  const tippyRef = React.useRef(null);

  const onMount = useCallback(() => {
    scale.set(1);
    opacity.set(1);
  }, []);

  const onHide = useCallback(({ unmount }) => {
    setIsVisible(false);
    const cleanup = scale.onChange((value) => {
      if (value <= 0.95) {
        cleanup();
        unmount();
      }
    });

    scale.set(0.95);
    opacity.set(0);
  }, []);

  return (
    <Tippy
      {...props}
      arrow={arrow}
      placement={placement}
      ref={tippyRef}
      render={(attrs) => (
        <motion.div style={{ scale, opacity, maxWidth: maxWidth || 'none' }} {...attrs}>
          <div className="relative">
            <div className="p-2 border border-mainblue bg-blur flex flex-col text-white text-tiny font-bolder space-y-2">
              {content}
            </div>
          </div>
        </motion.div>
      )}
      onShow={() => setIsVisible(true)}
      animation
      onMount={onMount}
      onHide={onHide}
      trigger="click"
      interactive
    >
      {React.cloneElement(children, { active: isVisible })}
    </Tippy>
  );
};

export default Modal;
