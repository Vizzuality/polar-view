import { Story } from '@storybook/react/types-6-0';
import FilterCheck, { IFilterCheck } from './component';
import React from 'react';

export default {
  title: 'Components/FilterCheck',
  component: FilterCheck,
};

const Template: Story<IFilterCheck> = ({ ...args }: any) => (
  <div className="w-[300px]">
    <FilterCheck {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Sentinal-2',
  bullet: 'yellow',
  menuProps: {
    onClick: (item) => {
      console.info('clicked', item);
      return true;
    },
    items: [
      { text: 'DOWNLOAD', value: 'download' },
      { text: 'COLOR SETTINGS', value: 'color' },
    ],
  },
  checkboxProps: {
    onChange: (event) => {
      console.info(event.target.checked);
    },
  },
};

export const Examples1: React.FC = () => (
  <div className="w-[300px]">
    <FilterCheck
      label="Sentinal-2"
      bullet="yellow"
      menuProps={{
        onClick: (item) => {
          console.info('clicked', item);
          return true;
        },
        items: [
          { text: 'DOWNLOAD', value: 'download' },
          { text: 'COLOR SETTINGS', value: 'color' },
        ],
      }}
      checkboxProps={{
        onChange: (event) => {
          console.info(event);
        },
      }}
    />

    <FilterCheck
      label="Radarsat-2"
      bullet="purple"
      menuProps={{
        onClick: (item) => {
          console.info('clicked', item);
          return true;
        },
        items: [
          { text: 'DOWNLOAD', value: 'download' },
          { text: 'COLOR SETTINGS', value: 'color' },
        ],
      }}
      checkboxProps={{
        onChange: (event) => {
          console.info(event);
        },
      }}
    />

    <FilterCheck
      label="Cosmo SkyMed"
      bullet="green"
      menuProps={{
        onClick: (item) => {
          console.info('clicked', item);
          return true;
        },
        items: [
          { text: 'DOWNLOAD', value: 'download' },
          { text: 'COLOR SETTINGS', value: 'color' },
        ],
      }}
      checkboxProps={{
        checked: true,
        onChange: (event) => {
          console.info(event);
        },
      }}
    />
  </div>
);
