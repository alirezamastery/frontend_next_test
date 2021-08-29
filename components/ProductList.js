import ProductDetail from './ProductDetail'

function ProductList({products}) {
  return (
    <div>
      {products.map(product => (
        <ProductDetail product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
