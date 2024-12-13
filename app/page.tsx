import { Title, Container, TopBar, Filters, ProductGroupList } from '@/components/shared'

export default function Home() {
  return (
    <>
      
      <Container className="mt-8">
        <Title text="Все услуги" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[90px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список услуг */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList 
                title="Легковые"
                items={[
                  {
                    id: 3,
                    name: "Полная химчистка салона",
                    imageUrl:
                      'https://ton174.ru/upload/iblock/d79/d7957aea26904c4210fa3d6b45ea1bea.jpg',
                    price: 8000,
                    items: [{ price: 8000 }]
                  },
                  {
                    id: 1,
                    name: "Помыть кузов",
                    imageUrl:
                      'https://images.techinsider.ru/upload/img_cache/7e7/7e703459f7fe367e287259988978a520_ce_1920x1278x0x129_cropped_666x444.webp',
                    price: 500,
                    items: [{ price: 500 }]
                  },
                  {
                    id: 2,
                    name: "Помыть салон",
                    imageUrl:
                      'https://www.galacentre.ru/upload/iblock/52e/kp85szmuunxjzscj5tw1syj5qla3y0dy.jpg',
                    price: 500,
                    items: [{ price: 500 }]
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList 
                title="Кроссоверы"
                items={[
                  {
                    id: 3,
                    name: "Полная химчистка салона",
                    imageUrl:
                      'https://ton174.ru/upload/iblock/d79/d7957aea26904c4210fa3d6b45ea1bea.jpg',
                    price: 8000,
                    items: [{ price: 8000 }]
                  },
                  {
                    id: 1,
                    name: "Помыть кузов",
                    imageUrl:
                      'https://images.techinsider.ru/upload/img_cache/7e7/7e703459f7fe367e287259988978a520_ce_1920x1278x0x129_cropped_666x444.webp',
                    price: 500,
                    items: [{ price: 500 }]
                  },
                  {
                    id: 2,
                    name: "Помыть салон",
                    imageUrl:
                      'https://www.galacentre.ru/upload/iblock/52e/kp85szmuunxjzscj5tw1syj5qla3y0dy.jpg',
                    price: 500,
                    items: [{ price: 500 }]
                  },
                ]}
                categoryId={2}
              />
              <ProductGroupList 
                title="Джипы"
                items={[
                  {
                    id: 3,
                    name: "Полная химчистка салона",
                    imageUrl:
                      'https://ton174.ru/upload/iblock/d79/d7957aea26904c4210fa3d6b45ea1bea.jpg',
                    price: 8000,
                    items: [{ price: 8000 }]
                  },
                  {
                    id: 1,
                    name: "Помыть кузов",
                    imageUrl:
                      'https://images.techinsider.ru/upload/img_cache/7e7/7e703459f7fe367e287259988978a520_ce_1920x1278x0x129_cropped_666x444.webp',
                    price: 500,
                    items: [{ price: 500 }]
                  },
                  {
                    id: 2,
                    name: "Помыть салон",
                    imageUrl:
                      'https://www.galacentre.ru/upload/iblock/52e/kp85szmuunxjzscj5tw1syj5qla3y0dy.jpg',
                    price: 500,
                    items: [{ price: 500 }]
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>


        </div>
      </Container>
    </>
  );
}
