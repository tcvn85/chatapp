export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Shop [...slug]: {params.slug}</div>
}
