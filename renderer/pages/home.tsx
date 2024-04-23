import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Prism</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>
        <span>⚡ Prism ⚡</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/signup">Signup</Link>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/login">Login</Link>
      </div>
    </React.Fragment>
  )
}
