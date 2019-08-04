import * as React from "react"

// This allows us to use the sx prop from Theme UI
// in any HTML tag
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    sx?: any
  }
}
