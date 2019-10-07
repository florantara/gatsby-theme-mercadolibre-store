import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { Header as ThemeHeader, jsx } from "theme-ui"

// Gatsby
import { Link } from "gatsby"

// Site config
import { siteConfig } from "../settings/site"

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
    header: { layout, secondaryNavigation, mainNavigationItems },
  } = siteConfig

  const whatsappBase = "https://api.whatsapp.com/send?phone="
  return (
    <ThemeHeader className={layout ? `Header--${layout}` : ""}>
      <div sx={{ variant: "siteHeader.logoContainer" }}>
        <Link to="/">
          {logoMedium ? (
            <img
              src={logoMedium.childImageSharp.fixed.src}
              alt={site.siteMetadata.title}
            />
          ) : (
            <span sx={{ variant: "siteHeader.textLogo" }}>
              {site.siteMetadata.title}
            </span>
          )}
        </Link>
      </div>
      {mainNavigationItems && (
        <div sx={{ variant: "siteHeader.mainNavigation" }}>
          <nav role="navigation">
            <ul>
              {mainNavigationItems.map((m, i) => (
                <li key={i}>
                  {m.link.indexOf("http") !== -1 ? (
                    <a href={m.link} rel="noopener noreferrer" target="_blank">
                      {m.label}
                    </a>
                  ) : (
                    <Link to={m.link}>{m.label}</Link>
                  )}
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
                  title="Contactar"
                  aria-label="Contactar"
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
