import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import { getPbImageURL, numberWithComma } from '@/utils';


const PB_PRODUCTS_ENDPOINT = 
  http://127.0.0.1:8090/api/collections/products/records
;

function ProductList() {
  useFetchData()



  // 로딩 중인 경우 화면
  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }

  // 오류가 발생한 경우 화면
  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  // javascript statement
  // if (data) {
  //   if ('items' in data) {
  //     if (Array.isArray(data.items)) {
  //       return data.items.map(item => (
  //         <ProductItem key={item.id} item={item} />
  //       ))
  //     }
  //   }
  // }

  return (
    <ul className="grid grid-cols-3 m-10">
      {/* javascript expression */}
      {data &&
        data.items &&
        data.items?.map((item) => <ProductItem key={item.id} item={item} />)}
    </ul>
  );
}

function ProductItem({ item }) {
  return (
    <li>
      <figure className="flex flex-col items-start">
        <img
          src={getPbImageURL(item, 'photo')}
          className="h-96 w-auto"
          alt=""
        />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title} [ {item.color} ]
          </span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default ProductList;