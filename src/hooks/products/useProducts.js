import useFetchData from "../useFetchData";


export function useRead () {}
export function useCreate () {}
export function useUpdata () {}
export function useDelete () {

  return async function deleteProduct(deleteId) {
    return await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records/${deleteId}`)
  }

}