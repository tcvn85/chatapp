export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="mb-5 text-center text-xl">Product detail</h1>
      <p>My Shop [...slug]: {params.slug}</p>
    </div>
  )
}
