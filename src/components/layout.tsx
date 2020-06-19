import React from "react"

import "./layout.css"

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

function Layout({ children }: LayoutProps): JSX.Element {
  return <main>{children}</main>
}

export default Layout
