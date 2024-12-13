import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EasyProductCard } from "./easy-product-card";
import { Title } from "./title";
import { Container } from "./container";

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const EasyProductSlider: React.FC<Props> = ({ title, items }) => {
  return (
    <>
      <Title text={title} size="md" className="font-extrabold mb-2 mt-8" />

      <Carousel className="group max-w-full">
        <CarouselContent>
          {items.map((product, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <EasyProductCard id={0} name={product.name} price={product.price} imageUrl={product.imageUrl}></EasyProductCard>
            </CarouselItem>))}
        </CarouselContent>
        <CarouselPrevious
          variant="default"
          className="invisible absolute left-2 transition duration-500 -translate-x-[-8px] opacity-0 group-hover:opacity-100  group-hover:visible group-hover:translate-x-0"
        />
        <CarouselNext
          variant="default"
          className="invisible absolute right-2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100  group-hover:visible group-hover:translate-x-0"
        />
      </Carousel>
    </>
  );
};