import React, { FunctionComponent } from "react"

// React Icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx } from "theme-ui"

// Gatsby
import { Link } from "gatsby"

// Types
import { IPathContext } from "../types/theme"

interface IProps {
  context: IPathContext
}

interface IPaginationElement {
  link?: string
  pageNumber?: number | string
  isCurrent?: boolean
  isSeparator?: boolean
}

const getElement = (
  length: number,
  page: number,
  increment = 2,
  pathPrefix: string
) =>
  Array.from({ length }, (_, i) => ({
    link: `/${pathPrefix}/${i + increment}/`,
    pageNumber: i + increment,
    isCurrent: page === i + increment,
  }))

const Pagination: FunctionComponent<IProps> = ({ context }) => {
  const { index, pageCount, pathPrefix } = context

  if (!index || !pageCount || !pathPrefix) {
    return null
  }

  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  let paginationElements: IPaginationElement[] = [
    {
      link: `/${pathPrefix}/`,
      pageNumber: 1,
      isCurrent: index === 1,
    },
  ]

  // Generates the formatted pagination:
  // Example output: 1, sparator, 10, 11, 12, isSeparator, 44
  if (pageCount <= 5) {
    paginationElements = [
      ...paginationElements,
      ...Array.from({ length: pageCount - 1 }, (_, i) => ({
        link: `/${pathPrefix}/${i + 2}/`,
        pageNumber: i + 2,
        isCurrent: index === i + 2,
      })),
    ]
  } else {
    if (index <= 3) {
      paginationElements = [
        ...paginationElements,
        ...getElement(3, index, 2, pathPrefix),
        {
          isSeparator: true,
        },
        {
          link: `/${pathPrefix}/${pageCount}/`,
          pageNumber: pageCount,
          isCurrent: false,
        },
      ]
    } else if (index > pageCount - 3) {
      paginationElements = [
        ...paginationElements,
        {
          isSeparator: true,
        },
        ...getElement(4, index, pageCount - 3, pathPrefix),
      ]
    } else {
      paginationElements = [
        ...paginationElements,
        {
          isSeparator: true,
        },
        ...getElement(3, index, index - 1, pathPrefix),
        {
          isSeparator: true,
        },
        {
          link: `/${pathPrefix}/${pageCount}/`,
          pageNumber: pageCount,
          isCurrent: false,
        },
      ]
    }
  }

  return (
    <nav
      sx={{ variant: "pagination" }}
      role="pagination"
      aria-label="Paginación de Productos"
    >
      <ul>
        <li key="prevPage" sx={{ variant: "pagination.leftArrow" }}>
          <Link
            to={`/${pathPrefix}/${previousUrl}`}
            aria-label="Ir a la página anterior"
          >
            <FaArrowLeft />
          </Link>
        </li>
        {paginationElements.map((el, i) => {
          return (
            <li key={i}>
              {el.isSeparator ? (
                <span sx={{ variant: "pagination.separator" }}>...</span>
              ) : (
                <Link
                  to={el.link ? el.link : "#"}
                  aria-label={`Ir a la página ${el.pageNumber}`}
                  aria-current={el.isCurrent ? el.isCurrent : undefined}
                >
                  {el.pageNumber}
                </Link>
              )}
            </li>
          )
        })}
        <li key="nextPage" sx={{ variant: "pagination.rightArrow" }}>
          <Link
            to={`/${pathPrefix}/${nextUrl}`}
            aria-label="Ir a la próxima página"
          >
            <FaArrowRight />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
