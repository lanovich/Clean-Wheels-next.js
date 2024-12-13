'use client'

import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';
import { Skeleton } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (ids: string) => void;
  defaultValue?: string[];
  className?: string;
  loading?: boolean;
  selectedIds?: Set<string>;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selectedIds,
  name,
  // defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  
  
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit).fill(0).map((_, index) => (
          <Skeleton key={index} className='h-6 mb-3 rouded-[8px]'/>
        ))}
      </div>
    )
  }

  const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.trim().toLowerCase()))  : defaultItems.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className="bg-slate-100 border-none"/>
        </div>
        )
      }

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            name={name}
            key={index}
            text={item.text}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-200 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};