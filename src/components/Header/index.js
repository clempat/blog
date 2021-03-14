import * as React from "react"
import { Link } from "gatsby"

import "./styles.scss"

export default function Header({ title }) {
  return (
    <header className={"page__header"}>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  )
}
