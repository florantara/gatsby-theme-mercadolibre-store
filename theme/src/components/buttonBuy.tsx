import React, { FunctionComponent } from "react"

//Icons
import { FiExternalLink } from "react-icons/fi"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { jsx } from "theme-ui"

interface IProps {
  permalink: string
  showMercadoLibreButton: boolean
  product: IProduct
}

// Component Hooks
import { Hook_BelowButtonBuy } from "./hooks/belowButtonBuy"
import { IProduct } from "../types/product"

export const ButtonBuy: FunctionComponent<IProps> = ({
  permalink,
  showMercadoLibreButton,
  product,
}) => {
  return (
    <div>
      {showMercadoLibreButton && (
        <a
          className="buyButton"
          sx={{ variant: "buttons.primary" }}
          href={permalink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Comprar en <strong>MercadoLibre</strong>
          <FiExternalLink />
        </a>
      )}
      <Hook_BelowButtonBuy product={product} />
    </div>
  )
}
