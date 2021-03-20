import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <img className="mx-auto" src="/logo_palpitebox.png" alt="PalpiteBox" />
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-md mx-auto text-center">
        <Link href="/">
          <a className="px-2 hover:underline">Home</a>
        </Link>
        <Link href="/sobre">
          <a className="px-2 hover:underline">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="px-2 hover:underline">Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className="px-2 hover:underline">Pesquisa</a>
        </Link>
      </div>
    </>
  )
}

export default Header
