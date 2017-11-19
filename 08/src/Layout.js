import React from 'react'

// functional components
// render functionだけのcomponent

const Layout = ({ children }) => {
  return (
    <div>
      <header>共通ヘッダ</header>
      <div>{children}</div>
    </div>
  )
}

export default Layout
