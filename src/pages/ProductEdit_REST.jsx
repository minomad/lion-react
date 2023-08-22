import { useEffect, useId, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductItem from '@/hooks/useProductItem';
import Spinner from '@/components/Spinner';
import { useDelete as useDeleteProduct, useUpdate as UseUpdateProduct } from '@/hooks/products/useProducts';
import debounce from '@/utils/debounce';

const initialFormState = {
  title: '',
  color: '',
};

function ProductEdit() {
  const titleId = useId();
  const colorId = useId();
  const priceId = useId();

  const { productId } = useParams();
  const navigate = useNavigate();
  const deleteProduct = useDeleteProduct();
  const updataProduct = UseUpdateProduct();

  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  const handleDebounceChangeInput = debounce(({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }, 300);

  const handleEditProduct = (e) => {
    e.preventDefault(); // ← 이유
    // client → server(pb)
    // Content-Type: application/json
      updataProduct(productId, formState)
      .then(() => navigate('/products'))
      .catch((error) => console.error(error));
  };

  const handleDeleteProduct = () => {
    const userConfirm = confirm('정..말로 지울건가요? 🥹');
    
    if (userConfirm) {
      deleteProduct(productId)
        .then((response) => {
          console.log(response)
          navigate('/products')
        })
        .catch(error => console.error(error));
    }
  }

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">
          {data.title}({data.color}) 수정 폼
        </h2>
        <form
          onSubmit={handleEditProduct}
          className="flex flex-col items-center py-10"
        >
          {/* title */}
          <div>
            <label htmlFor={titleId} className="mx-5">
              타이틀
            </label>
            <input
              type="text"
              name="title"
              id={titleId}
              defaultValue={formState.title}
              onChange={handleDebounceChangeInput}
            />
          </div>
          {/* color */}
          <div>
            <label htmlFor={colorId} className="mx-5">
              컬러
            </label>
            <input
              type="text"
              name="color"
              id={colorId}
              defaultValue={formState.color}
              onChange={handleDebounceChangeInput}
            />
          </div>
          {/* price */}
          <div>
            <label htmlFor={priceId} className="mx-5">
              프라이스
            </label>
            <input
              type="number"
              name="price"
              id={priceId}
              defaultValue={formState.price}
              onChange={handleDebounceChangeInput}
            />
          </div>
          <div>
            <button type="submit" className="p-2 border rounded-sm">
              수정
            </button>
            <button
              type="button"
              onClick={handleDeleteProduct}
              className="p-2 border rounded-sm"
            >
              삭제
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;
