import React, { FunctionComponent } from "react"

// React Icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

// Theme UI
/** @jsx jsx */
import { jsx } from "theme-ui"

// Gatsby
import { Link } from "gatsby"

// Types
import { IProductNode } from "../types/product"

interface IProps {
  context: {
    additionalContext?: any
    first: boolean
    last: boolean
    group: IProductNode[]
    index: number
    isCreatedByStatefulCreatePages: boolean
    pageCount: number
    pathPrefix: string
  }
}

const Pagination: FunctionComponent<IProps> = ({ context }) => {
  const { index, first, last, pageCount, pathPrefix } = context
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  return (
    <nav
      sx={{ variant: "pagination" }}
      role="pagination"
      aria-label="Pagination Navigation"
    >
      {!first && (
        <span sx={{ variant: "pagination.leftArrow" }}>
          <Link
            to={`/${pathPrefix}/${previousUrl}`}
            aria-label="Go to Previous Page"
          >
            <FaArrowLeft />
          </Link>
        </span>
      )}
      {index} of {pageCount} pages
      {!last && (
        <span sx={{ variant: "pagination.rightArrow" }}>
          <Link to={`/${pathPrefix}/${nextUrl}`} aria-label="Go to Next Page">
            <FaArrowRight />
          </Link>
        </span>
      )}
    </nav>
  )
}

export default Pagination
