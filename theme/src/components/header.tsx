import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
import { Header as ThemeHeader, jsx } from "theme-ui"

// Gatsby
import { graphql, useStaticQuery, Link } from "gatsby"

// Site config
import siteConfig from "../settings/site"

// Data
import { useMeta } from "../data/siteMeta"
import { useLogo } from "../data/siteLogo"
import { useSeller } from "../data/sellerInfo"

// Icons
import { FiShoppingCart, FiMail } from "react-icons/fi"

const Header: FunctionComponent = () => {
  // Data
  const { site } = useMeta()
  const { logoMedium } = useLogo()
  const { mercadoLibreSeller } = useSeller()
  // Site Config
  const { header } = siteConfig

  return (
    <ThemeHeader>
      <div sx={{ variant: "siteHeader.logoContainer" }}>
        <Link to="/">
          {logoMedium ? (
            <img
              src={logoMedium.childImageSharp.fixed.src}
              alt={site.siteMetadata.title}
            />
          ) : (
            <h1 sx={{ variant: "siteHeader.textLogo" }}>
              {site.siteMetadata.title}
            </h1>
          )}
        </Link>
      </div>
      {header.mainNavigationItems && (
        <div sx={{ variant: "siteHeader.mainNavigation" }}>
          <nav role="navigation">
            <ul>
              {header.mainNavigationItems.map((m, i) => (
                <li key={i}>
                  <Link to={m.link}>{m.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <div sx={{ variant: "siteHeader.secondaryNavigation" }}>
        <nav role="navigation">
          <ul>
            {header.secondaryNavigation.showMLStoreLink && (
              <li>
                <a
                  href={mercadoLibreSeller.seller.permalink}
                  target="_blank"
                  aria-label="Ir a la tienda en MercadoLibre"
                >
                  <FiShoppingCart />
                </a>
              </li>
            )}
            {header.secondaryNavigation.showContactLink && (
              <li>
                <a
                  href={`${
                    header.secondaryNavigation.contactType === "email"
                      ? "mailto:"
                      : ""
                  }${header.secondaryNavigation.contactUrl}`}
                  target="_blank"
                  aria-label="Contactar al vendedor"
                >
                  <FiMail />
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </ThemeHeader>
  )
}

export default Header
