import { useState } from 'react';

import { Story } from '@storybook/react/types-6-0';

import Modal, { ModalWindowProps } from './index';
import Button from 'components/button/component';

export default {
  title: 'Components/Modal Window',
  component: Modal,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    open: {
      control: {
        disable: true,
      },
    },
    onDismiss: {
      control: {
        disable: true,
      },
    },
  },
};

const Template: Story<ModalWindowProps> = ({ ...args }: ModalWindowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button theme="primary" size="medium" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal {...args} open={open} onDismiss={() => setOpen(false)} />
    </>
  );
};

export const Default: Story<ModalWindowProps> = Template.bind({});
Default.args = {
  title: 'Modal component',
  dismissable: false,
  children: (
    <div className="relative h-full">
      <div className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sodales est, eu imperdiet
        elit. Suspendisse eget diam accumsan, lacinia odio nec, fringilla ex. Quisque consectetur
        diam in massa egestas, vitae posuere magna semper. Sed ac iaculis purus, at pretium tellus.
        Duis non commodo lorem, non tincidunt ex.
      </div>
    </div>
  ),
};
