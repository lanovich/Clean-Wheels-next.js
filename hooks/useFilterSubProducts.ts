import { Api } from "@/services/api-client";
import { SubProduct } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

interface ReturnProps {
  subProducts: SubProduct[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterSubProducts = (): ReturnProps => {
  const [ subProducts, setSubProducts ] = React.useState<SubProduct[]>([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIds, {toggle}] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchSubProducts() {
      try {
        setLoading(true)
        const subProducts = await Api.subProducts.getAll();
        setSubProducts(subProducts)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchSubProducts();
  }, []);

  return { subProducts, loading, onAddId: toggle, selectedIds }
}