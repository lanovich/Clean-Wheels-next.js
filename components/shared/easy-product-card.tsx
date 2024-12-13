import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const EasyProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={className}>
      <Link href={`/subProduct/${id}`}>
        <div className="flex justify-center rounded-sm h-[150px]">
          <img className="object-cover rounded-sm mt-2" src={imageUrl} alt={name} />
        </div>

        <p className="text-sm mt-1 ">
          {name}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-[15px] w-2">
            <b>{price}₽</b>
          </span>

          <Button variant='outline' className="text-xs font-bold">
            <Plus size={20} className="mr-1" />
          </Button>
        </div>
      </Link>
    </div>
  );
};