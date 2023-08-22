import useProductList from '@/api/useProductList';
import Spinner from '@/components/Spinner';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { getPbImageURL, numberWithComma } from '@/utils';
import { Link } from 'react-router-dom';

function Products() {
  useDocumentTitle('제품 목록');

  const { status, data, error } = useProductList();


  // const [state, setState] = useState({
  //   data: null,
  //   status: 'pending',
  //   error: null,
  // });

  // useEffect(() => {
  //   setState({
  //     ...state,
  //     status: 'loading'
  //   });

  //   async function getProducts() {
  //     try {
  //       const records = await pb.collection('products').getFullList({
  //         sort:'-created',
  //         fields:'title,color,price,id,photo'//특정 필드만 가져오기
  //       });
      
  //       setState({
  //         data: records,
  //         status: 'success'
  //       });
  //     } catch(error) {
  //       setState({
  //         ...state,
  //         status: 'error',
  //         error
  //       });
  //     }
      
  //   }

  //   getProducts();
    
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  if (status === 'loading') {
    return <Spinner size={160} />;
  }

  if (status === 'error') {
    return <div role="alert">{error.message}</div>;
  }

  if (status === 'success') {
    return (
      <div>
        <h1 className="text-indigo-950 text-2xl mb-5">Products</h1>
        <ul className="grid grid-cols-3">
          {data.map((item) => (
            <li key={item.id} className="justify-self-center">
              <Link to={`/product/edit/${item.id}`}>
                <figure>
                  <img
                    className="h-[160px] object-cover mx-auto"
                    src={getPbImageURL(item, 'photo')}
                    alt=""
                  />
                  <figcaption className="flex flex-col gap-1 items-center mt-2">
                    <span>
                      {item.title}({item.color})
                    </span>
                    <span className="font-semibold">
                      {numberWithComma(item.price)}
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
