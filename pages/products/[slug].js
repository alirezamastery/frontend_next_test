import {server_api} from '../../config/index'


function Product({ product }) {
  return (
    <div>
      {product.name}
      <img src={product.image} />
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await fetch(`${server_api}/products/`)
  const products = await res.json()

  // Get the paths we want to pre-render based on products
  const paths = products['results'].map((product) => ({
    params: { slug: product.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the product `slug`.
  // If the route is like /products/1, then params.id is 1
  const res = await fetch(`${server_api}/products/${params.slug}`)
  const product = await res.json()
  console.log('in products/[slug]',product)

  // Pass post data to the page via props
  return { props: { product: product } }
}

export default Product