import { useState } from 'react';
import pb from './pocketbase';

export function useProducts() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  async function getProductList() {
    try {
      setStatus('loading');
      const productItems = await pb.collection('products').getFullList();
      setData(productItems);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function createProduct(productData) {
    try {
      const createdProduct = await pb.collection('products').create(productData);
      setData((prevData) => [createdProduct, ...prevData]);
    } catch (error) {
      setStatus('error');
    }
  }

  async function updateProduct(id, updatedData) {
    try {
      await pb.collection('products').updateById(id, updatedData);
      setData((prevData) => prevData.map((product) => (product.id === id ? { ...product, ...updatedData } : product)));
    } catch (error) {
      setStatus('error');
    }
  }

  async function deleteProduct(id) {
    try {
      await pb.collection('products').deleteById(id);
      setData((prevData) => prevData.filter((product) => product.id !== id));
    } catch (error) {
      setStatus('error');
    }
  }

  return {
    data,
    status,
    getProductList,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
