import React, { FunctionComponent } from "react"

// Types
import { IProduct } from "../types/product"

// Gatsby
import Img from "gatsby-image"
import { Link } from "gatsby"

// Material UI
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

// Data
import { useTheme } from "../theme/useTheme"

// Styled Components
import styled from "styled-components"

const Wrapper = styled(Card)<{ maxwidth?: string }>`
  width: ${props => props.maxWidth || "270px"};
`
const Image = styled(Img)<{ height?: string }>`
  height: ${props => props.height || "400px"};
`

const Title = styled(Typography)`
  text-decoration: none;
`
const Price = styled(Typography)`
  text-decoration: none;
  color: ;
`

interface IProps {
  product: IProduct
}
const ProductCard: FunctionComponent<IProps> = ({ product }) => {
  const {
    siteTheme: { theme },
  } = useTheme()

  return (
    <Wrapper maxwidth={theme.productDetail.cardWidth}>
      <Link to={product.fields.slug}>
        <CardActionArea>
          <Image
            height={theme.productDetail.imageHeight}
            fluid={product.itemThumbnail.image.childImageSharp.fluid}
            alt={`${product.title} - ${product.title}`}
          />
          <CardContent>
            <Title gutterBottom variant="h6" component="h2">
              {product.title}
            </Title>
            <Price variant="body2" component="p">
              {product.currency_id}
              {product.price}
            </Price>
          </CardContent>
        </CardActionArea>
      </Link>
    </Wrapper>
  )
}

export default ProductCard
