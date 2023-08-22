import { useState, useEffect } from 'react';
import pb from './pocketbase';

// 사용자 옵션을 사용할려면 메모이제이션 학습
function useProductList() {
  const [state, setState] = useState({
    data: null,
    status: 'pending',
    error: null,
  });

  useEffect(() => {
    setState({
      ...state,
      status: 'loading',
    });

    async function getProducts() {
      try {
        const records = await pb
          .collection('products')
          .getFullList(
  //           {
  //             sort:'-created',
  //             fields:'title,color,price,id,photo'//특정 필드만 가져오기
  //           }
          );

        setState({
          data: records,
          status: 'success',
        });
      } catch (error) {
        setState({
          ...state,
          status: 'error',
          error,
        });
      }
    }

    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

export default useProductList;
