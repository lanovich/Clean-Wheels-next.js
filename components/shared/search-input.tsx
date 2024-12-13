"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";
import Image from "next/image";
import { categories } from "@/prisma/constants";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts(products);
  };

  return (
    <>
      {/* Input и Затемнение при фокусе */}
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        className={cn(
          "flex rounded-2xl flex01 justify-between relative h-11 z-30",
          className
        )}
        ref={ref}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти услугу"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Popup */}
        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-0 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}
                onClick={onClickItem}
              >
                <Image
                  className="prounded-sm"
                  width={32}
                  height={32}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
                <span className="text-gray-400">
                  {categories[product.categoryId - 1].name.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
