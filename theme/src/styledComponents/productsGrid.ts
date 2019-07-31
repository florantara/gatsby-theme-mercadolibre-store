import styled from "@emotion/styled"
import { theme } from "../settings/theme"

// Based on the breakpoints array, create
// corresponding grid-gap and grid-template-columns
// media queries
const mediaQueries: any = theme.breakpoints.map((b: string, i: number) => {
  if (b && theme.productsListing.columns[i] && theme.productsListing.space[i]) {
    return `@media (min-width: ${b}){
      grid-gap: ${theme.productsListing.space[i]};
      grid-template-columns: repeat(${theme.productsListing.columns[i]}, 1fr);
    }`
  }
})

export const ProductsGrid = styled.ul`
  display: grid;
  grid-gap: ${theme.productsListing.space[0]};
  padding-left: 0;
  ${mediaQueries}
`
