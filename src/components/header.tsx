import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-5">
      <div className="grid grid-cols-2">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div>
          <ul className="flex justify-end gap-5">
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/">Chat</Link>
            </li>
            <li>
              <Link href="/todo">Todo</Link>
            </li>
            <li>
              <Link href="/newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
