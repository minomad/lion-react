import { useEffect, useId, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductItem from '@/hooks/useProductItem';
import Spinner from '@/components/Spinner';
import {
  useDelete as useDeleteProduct,
  useUpdate as useUpdateProduct,
} from '@/hooks/products/useProducts';
import debounce from '@/utils/debounce';

const initialFormState = {
  title: '',
  color: '',
  price: '',
};

function ProductEdit() {
  const titleId = useId();
  const colorId = useId();
  const priceId = useId();

  const { productId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  const deleteProduct = useDeleteProduct();
  const updateProduct = useUpdateProduct();

  // useEffect(() => {
  //   console.log(formState);
  // }, [formState])

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleDebounceChangeInput = debounce(handleChangeInput, 500);

  const handleEditProduct = (e) => {
    e.preventDefault();

    updateProduct(productId, formState)
      .then(() => navigate('/products'))
      .catch((error) => console.error(error));
  };

  const handleDeleteProduct = () => {
    const userConfirm = confirm('정..말로 지울건가요? 🥹');

    if (userConfirm) {
      deleteProduct(productId)
        .then((response) => {
          console.log(response);
          navigate('/products');
        })
        .catch((error) => console.error(error));
    }
  };

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    console.log(formState.title);
    console.log(formState.color);
    console.log(formState.price);

    return (
      <>
        <h2 className="text-2xl text-center">
          {data.title}({data.color}) 수정 폼
        </h2>
        <form onSubmit={handleEditProduct} className='flex flex-col items-center'>
          {/* title */}
          <div className='my-3'>
            <label htmlFor={titleId} className='mr-3'>타이틀</label>
            <input
              type="text"
              name="title"
              id={titleId}
              defaultValue={formState.title}
              onChange={handleDebounceChangeInput}
              className="outline"
            />
          </div>
          {/* color */}
          <div className='my-3'>
            <label htmlFor={colorId} className='mr-3'>컬러</label>
            <input
              type="text"
              name="color"
              id={colorId}
              defaultValue={formState.color}
              onChange={handleDebounceChangeInput}
              className="outline"
            />
          </div>
          {/* price */}
          <div className='my-3'>
            <label htmlFor={priceId} className='mr-3'>프라이스</label>
            <input
              type="number"
              name="price"
              step={1000}
              id={priceId}
              defaultValue={formState.price}
              onChange={handleDebounceChangeInput}
              className="outline"
            />
          </div>
          <div>
            <button type="submit">수정</button>
            <button type="button" onClick={handleDeleteProduct}>
              삭제
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;