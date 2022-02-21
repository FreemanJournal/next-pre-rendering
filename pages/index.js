import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Home() {
  const router = useRouter()
  function userClickHandler(){
    router.replace("/users")
  }
  return (
    <div>
      <h1>Home Js pre-rendering</h1>
      <button type="button" onClick={userClickHandler}>Users</button>
      {/* <Link href="/users">
        <a> Users Page</a>
      </Link> */}
    </div>
  )
}
