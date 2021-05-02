import React from "react"
import Header from "../components/header"
import Layout from "../components/layout/layout"

export default function Home() {
  return (
    <div>
      <Layout>
        <Header headerText="Hello Gatsby!" />
      </Layout>
    </div>
  )
}