import useSWR from 'swr'
import {server_api} from '../config/index'
import ProductList from '../components/ProductList'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Products({ products }) {
  // const products = useSWR('http://127.0.0.1:8000/api/products/', fetcher)
  console.log(products)

  return (
    <>
      <ProductList products={products['results']} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server_api}/products`)
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}
