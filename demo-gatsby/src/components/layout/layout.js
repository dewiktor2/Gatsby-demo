import React from "react"
import Nav from "../navigation/nav"
import * as navStyles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <div>
      <Nav/>
      <div className={navStyles.layout}>
        {children}
      </div>
    </div>
  )
}