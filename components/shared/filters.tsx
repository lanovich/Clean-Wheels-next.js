'use client'

import { Title } from './title';
import React from 'react';
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filter-group';
import { useFilterSubProducts } from '@/hooks/useFilterSubProducts';

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { subProducts, loading, onAddId, selectedIds } = useFilterSubProducts();

  const items = subProducts.map(item => ({ value: String(item.id), text: item.name }))

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

      {/* Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox name='Легковые' text="Легковые" value="1"/>
        <FilterCheckbox name='Кроссоверы' text="Кроссоверы" value="2"/>
        <FilterCheckbox name='Джипы' text="Джипы" value="3"/>
      </div>

      {/* Фильтр цен */}
      <div className='mt-5 border-y border-y-neutral-200 py-4 pb-3'>

        <p className="font-bold mb-3">Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type="number" min={0} max={30000} placeholder='0' defaultValue={0}></Input>
          <Input type="number" min={1000} max={30000} placeholder='30000'></Input>
        </div>
        <RangeSlider min={0} max={30000} step={10} value={[0, 30000]}/>
      </div>

      {/* Фильтр по услугам */}
      <CheckboxFiltersGroup 
        title="Услуги"
        name={'filterItems'}
        className="mt-5"
        limit={5}
        defaultItems={items}
        loading={loading}
        items={items}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div> 
  );
};