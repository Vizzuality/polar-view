import DatePicker from 'components/datepicker/component';
import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

interface IRangeOption {
  label: string;
  value: number;
}

interface ReactDatePickerComboProps extends ReactDatePickerProps {
  disableToday?: boolean;
}

interface IReactDatePickerComboProps {
  dateProps?: ReactDatePickerComboProps;
  options?: IRangeOption[];
  onChange?: (val: Date | number) => void;
}

type Ref = HTMLButtonElement;

const DefaultRangeOptions = [
  { label: 'LAST 24H.', value: -1 },
  { label: 'LAST 72H.', value: -2 },
  { label: 'LAST 7 DAYS', value: -7 },
  { label: 'LAST 30 DAYS.', value: -30 },
];

const DatePickerComboContainer = ({ children, options, onChange }) => {
  return (
    <div className="flex border border-mainblue bg-navyblue">
      <div className="text-white text-tiny p-2">
        {options.map((opt) => {
          return (
            <div
              key={opt.label}
              className="hover:bg-softerblue p-1 cursor-pointer"
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </div>
          );
        })}
      </div>
      <div className="p-2 border-l border-mainblue">{children}</div>
    </div>
  );
};

const DatePickerCombo: React.FC<IReactDatePickerComboProps> = ({
  dateProps = { onChange: () => {} },
  options = DefaultRangeOptions,
  onChange,
}: IReactDatePickerComboProps) => {
  const [value, setValue] = React.useState<Date | number>();
  const [open, setOpen] = React.useState(false);

  const onDateChange = (val: Date | number) => {
    setValue(val);
    setOpen(false);
  };

  React.useEffect(() => {
    onChange?.(value);
  }, [value]);

  const { startDate, onChange: _onChange, placeholderText, disableToday, ...others } = dateProps;
  const valIsN = value != undefined && typeof value === 'number';
  const placeholder = valIsN ? options.find((m) => m.value == value).label : placeholderText;

  return (
    <DatePicker
      onSelect={(date) => onDateChange(date)}
      open={open}
      onChange={() => {}}
      onInputClick={() => setOpen(true)}
      onCalendarOpen={() => setOpen(true)}
      onCalendarClose={() => setOpen(false)}
      placeholderText={placeholder}
      disableToday={disableToday}
      showValue={!valIsN}
      selected={!valIsN && value && new Date(value)}
      calendarContainer={(props) => (
        <DatePickerComboContainer {...props} options={options} onChange={onDateChange} />
      )}
      {...others}
    />
  );
};

export default DatePickerCombo;
