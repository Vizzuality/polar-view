import { Story } from '@storybook/react/types-6-0';
import Button from 'components/button';
import React from 'react';
import Modal, { ModalProps } from './component';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
};

const Content: React.FC = () => (
  <div className="relative">
    <img src="/images/sampleice.jpeg" alt="sample ice" />

    <div className="flex mt-3">
      <div className="mr-1.5">
        <Button theme="primary">View</Button>
      </div>

      <Button className="" theme="primary">
        Download
      </Button>
    </div>
  </div>
);

const Template: Story<ModalProps> = (args: ModalProps) => (
  <div className="flex h-full justify-center items-center">
    <Modal {...args}>
      <button className="text-white border border-white px-3 py-1" type="button">
        Modal Component
      </button>
    </Modal>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  content: <Content />,
};
