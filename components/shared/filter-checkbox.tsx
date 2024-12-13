import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdorment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ text, value, endAdorment, onCheckedChange, checked, name }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
      onCheckedChange={onCheckedChange}
      checked={checked}
      value={value}
      className="rounded-[8px] w-6 h-6"
      id={`checkbox-${name}-${value}`}
      >
      </Checkbox>
      <label htmlFor={`checkbox-${name}-${value}`} className='leading-none cursor-pointer flex-1'>
        {text}
      </label>
      {endAdorment}
    </div>
  );
};