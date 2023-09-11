'use client'
import Link from 'next/link'
import { signOut, signIn, useSession } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="p-5">
      <div className="navbar rounded-lg">
        <div className="navbar-start">
          <Link href="/" className="navbar-item">
            LOGO
          </Link>
        </div>

        <div className="navbar-end">
          <ul className="mr-3 flex gap-5">
            <li>
              <Link href="/">Chat</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
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
              <Link href="/server-action">Server Action</Link>
            </li>
          </ul>

          {session ? (
            <div className="avatar avatar-ring avatar-md">
              <div className="dropdown-container">
                <div className="dropdown">
                  <label
                    tabIndex={1}
                    className="btn btn-ghost flex cursor-pointer px-0"
                  >
                    <img
                      src={
                        session.user?.image ??
                        'https://placehold.co/50/EEE/31343C'
                      }
                      alt=""
                    />
                  </label>
                  <div className="dropdown-menu dropdown-menu-bottom-left">
                    <Link
                      tabIndex={-1}
                      href="#"
                      className="dropdown-item text-sm"
                    >
                      Profile's {session.user?.name ?? ''}
                    </Link>
                    <Link
                      tabIndex={-1}
                      href="#"
                      className="dropdown-item text-sm"
                    >
                      Account settings
                    </Link>
                    <Link
                      tabIndex={-1}
                      href="/auth/signout"
                      className="dropdown-item text-sm"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link onClick={() => signIn()} href="#">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
