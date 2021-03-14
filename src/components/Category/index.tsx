import * as React from "react"
import "./styles.scss"

export default function Category({ children }: React.PropsWithChildren<{}>) {
  return <span className={"category__label"}>{children}</span>
}
