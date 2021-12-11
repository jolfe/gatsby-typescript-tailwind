import React from "react"

interface ILayout {
  children: React.ReactNode
}
const Layout = (props: ILayout) => {
  return <>{props.children}</>
}
export default Layout
