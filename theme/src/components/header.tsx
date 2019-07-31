import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
import { Header as ThemeHeader, jsx } from "theme-ui"

// Gatsby
import { Link } from "gatsby"

// Site config
import siteConfig from "../settings/site"

// Data
import { useMeta } from "../data/siteMeta"
import { useLogo } from "../data/siteLogo"
import { useSeller } from "../data/sellerInfo"

// Icons
import { FiShoppingCart, FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

const Header: FunctionComponent = () => {
  // Data
  const { site } = useMeta()
  const { logoMedium } = useLogo()
  const { mercadoLibreSeller } = useSeller()
  // Site Config
  const {
    header: { secondaryNavigation, mainNavigationItems },
  } = siteConfig

  const whatsappBase = "https://api.whatsapp.com/send?phone="
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
      {mainNavigationItems && (
        <div sx={{ variant: "siteHeader.mainNavigation" }}>
          <nav role="navigation">
            <ul>
              {mainNavigationItems.map((m, i) => (
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
            {secondaryNavigation.showMLStoreLink && (
              <li>
                <a
                  href={mercadoLibreSeller.seller.permalink}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Ir a la tienda en MercadoLibre"
                  aria-label="Ir a la tienda en MercadoLibre"
                >
                  <FiShoppingCart />
                </a>
              </li>
            )}
            {secondaryNavigation.showContactLink && (
              <li>
                <a
                  href={`${
                    secondaryNavigation.contactType === "email" ? "mailto:" : ""
                  }${secondaryNavigation.contactUrl}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Contactar al vendedor"
                  aria-label="Contactar al vendedor"
                >
                  <FiMail />
                </a>
              </li>
            )}
            {secondaryNavigation.showWhatsAppLink && (
              <li>
                <a
                  href={`${whatsappBase}${secondaryNavigation.whatsAppNumber}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Contactanos por WhatsApp"
                  aria-label="Contactanos por WhatsApp"
                >
                  <FaWhatsapp />
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
