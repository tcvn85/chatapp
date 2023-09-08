export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="mb-5 text-center text-xl">Blog detail title</h1>
      <p>Blog: {params.slug}</p>
    </div>
  )
}
