import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Home() {
  const router = useRouter()
  function userClickHandler(){
    router.push("/users")
  }
  return (
    <div>
      <h1>Hay mom how are you</h1>
      <button type="button" onClick={userClickHandler}>Users</button>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  )
}
