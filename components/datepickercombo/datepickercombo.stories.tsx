import { Story } from '@storybook/react/types-6-0';
import DatePicker from './component';

export default {
  title: 'Components/DatePicker Combo',
  component: DatePicker,
};

const Template: Story<any> = ({ ...args }: any) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  dateProps: {
    placeholderText: 'Select Date',
  },
  onChange: (val) => {
    console.log(val);
  },
};
