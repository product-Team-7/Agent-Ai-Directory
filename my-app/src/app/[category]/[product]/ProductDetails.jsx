import Image from "next/image"

function ProductDetails({ params }) {
  const { category, product } = params

  return (
    <div>
      <h1>
        {category} / {product}
      </h1>
      <Image src={`/images/${category}/${product}.jpg`} width={500} height={500} alt={`${category} ${product}`} />
      <p>
        Details about {product} in the {category} category.
      </p>
    </div>
  )
}

export default ProductDetails

