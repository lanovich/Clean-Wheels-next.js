/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';
import { EasyProductSlider } from './easy-products-slider';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  title, 
  items, 
  categoryId, 
  className, 
  listClassName, }
) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])

  return (
      <div className={cn('scroll-mt-[100px]',className)} id={title} ref={intersectionRef}>
        <Title text={title} size="lg" className="font-extrabold mb-5" />

        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
          {items.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))}
        </div>
        <div className='grid-flow-row'>
          <EasyProductSlider
            title='Отдельные услуги'
            items={[
            {
              name: "Отбивка",
              price: 100,
              imageUrl: "https://ton174.ru/upload/iblock/d79/d7957aea26904c4210fa3d6b45ea1bea.jpg",
            },
            {
              name: "Отбивка c пеной",
              price: 150,
              imageUrl: "/logo.png",
            },
            {
              name: "Смыть мошек",
              price: 100,
              imageUrl: "https://ton174.ru/upload/iblock/d79/d7957aea26904c4210fa3d6b45ea1bea.jpg",
            },
            {
              name: "Твердый воск",
              price: 150,
              imageUrl: "/logo.png",
            },
            {
              name: "Воск",
              price: 100,
              imageUrl: "/logo.png",
            },
            {
              name: "Чистка дисков",
              price: 200,
              imageUrl: "/logo.png",
            },
            {
              name: "Чернение колес",
              price: 250,
              imageUrl: "/logo.png",
            },
            {
              name: "Багажник",
              price: 200,
              imageUrl: "/logo.png",
            },
            {
              name: "Помыть коврики",
              price: 100,
              imageUrl: "/logo.png",
            },
            {
              name: "Чистка кожи",
              price: 150,
              imageUrl: "/logo.png",
            },
        
            {
              name: "Кондиционер для кожаных частей",
              price: 100,
              imageUrl: "/logo.png",
            },
            ]}
          />
        </div>
      </div>
  );
};