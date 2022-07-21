import React from 'react'
import Navbar from '../../organisms/Navbar'

export default function Homepages({ children, classMain }: any) {
  return (
    <>
      <Navbar />
      <main className={`main-wrapper ${classMain}`}>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
