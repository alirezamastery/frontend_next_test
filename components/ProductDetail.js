import Link from 'next/link'

function ProductDetail({ product }) {
  console.log(product.slug)
  return (
    <Link href="/products/[slug]" as={`/products/${product.slug}`}>
      <a>
        <h3>{product.name}</h3>
      </a>
    </Link>
  )
}

export default ProductDetail
