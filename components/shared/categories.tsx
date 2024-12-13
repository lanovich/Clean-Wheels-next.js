'use client'

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string
}

const cats = [
  { id: 1, name: 'Легковые' },
  { id: 2, name: 'Кроссоверы' },
  { id: 3, name: 'Джипы' },
  { id: 4, name: 'Акции' },
  { id: 5, name: 'Другое'},
  ];

export const Categories: React.FC<Props> = ({ className }) => {
  const ActiveCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        cats.map(({ id, name}, index) => (
          <a 
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5 ',
            ActiveCategoryId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )} 
          href={`/#${name}`}
          key={index}
          >
            <button>{name}</button>
          </a>
        ))
      }
    </div>
  );
};