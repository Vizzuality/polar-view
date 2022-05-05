import { Story } from '@storybook/react/types-6-0';
import FilterCheck, { IFilterCheck } from './component';
import React from 'react';
import IceChartCheck from './icechartcheck';

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
    onItemClick: (item) => {
      console.log('clicked', item);
      return true;
    },
    items: [
      { text: 'DOWNLOAD', value: 'download' },
      { text: 'COLOR SETTINGS', value: 'color' },
    ],
  },
  checkboxProps: {
    onChange: (event) => {
      console.log(event.target.checked);
    },
  },
};

export const Examples1: React.FC = () => (
  <div className="w-[300px]">
    <FilterCheck
      label="Sentinal-2"
      bullet="yellow"
      menuProps={{
        onItemClick: (item) => {
          console.log('clicked', item);
          return true;
        },
        items: [
          { text: 'DOWNLOAD', value: 'download' },
          { text: 'COLOR SETTINGS', value: 'color' },
        ],
      }}
      checkboxProps={{
        onChange: (event) => {
          console.log(event);
        },
      }}
    />

    <FilterCheck
      label="Radarsat-2"
      bullet="purple"
      menuProps={{
        onItemClick: (item) => {
          console.log('clicked', item);
          return true;
        },
        items: [
          { text: 'DOWNLOAD', value: 'download' },
          { text: 'COLOR SETTINGS', value: 'color' },
        ],
      }}
      checkboxProps={{
        onChange: (event) => {
          console.log(event);
        },
      }}
    />

    <FilterCheck
      label="Cosmo SkyMed"
      bullet="green"
      menuProps={{
        onItemClick: (item) => {
          console.log('clicked', item);
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
          console.log(event);
        },
      }}
    />
  </div>
);

export const Examples2: React.FC = () => (
  <div className="w-[300px]">
    <IceChartCheck label="Fast Ice" bullet="gray" name="fastIce" />
    <IceChartCheck label="Very Close Drift Ice" bullet="red" />
    <IceChartCheck label="Close Drift Ice" bullet="orange" />
    <IceChartCheck label="Open Drift Ice" bullet="yellow" />
    <IceChartCheck label="Open Water" bullet="sky" />
  </div>
);
