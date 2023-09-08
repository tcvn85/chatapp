export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="p-5">{children}</main>
}
