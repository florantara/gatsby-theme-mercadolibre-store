import React, { FunctionComponent } from "react"

// Theme UI
/** @jsx jsx */
// @ts-ignore : jsx unused
import { Footer as ThemeFooter, jsx } from "theme-ui"

// Gatsby
import { Link } from "gatsby"

// Site config
import { siteConfig, TSocialLinkType } from "../settings/site"

// Data
import { useMeta } from "../data/siteMeta"
import { useLogo } from "../data/siteLogo"

// Icons

import { FaWhatsapp } from "react-icons/fa"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

const Footer: FunctionComponent = () => {
  // Data
  const { site } = useMeta()
  const { logoSmall } = useLogo()

  // Site Config
  const { footer } = siteConfig
  const getIcon = (type: TSocialLinkType) => {
    switch (type) {
      case "whatsapp": {
        return <FaWhatsapp />
      }
      case "instagram": {
        return <FiInstagram />
      }
      case "facebook": {
        return <FiFacebook />
      }
      case "twitter": {
        return <FiTwitter />
      }
      default: {
        return ""
      }
    }
  }

  return (
    <ThemeFooter>
      <div sx={{ variant: "siteFooter.container" }}>
        <aside>
          <div sx={{ variant: "siteFooter.logoContainer" }}>
            <Link to="/">
              {logoSmall ? (
                <img
                  src={logoSmall.childImageSharp.fixed.src}
                  alt={site.siteMetadata.title}
                />
              ) : (
                <h1 sx={{ variant: "siteFooter.textLogo" }}>
                  {site.siteMetadata.title}
                </h1>
              )}
            </Link>
          </div>
        </aside>
        {footer.showInternalLinksColumn && (
          <aside>
            {footer.internalLinks && (
              <div sx={{ variant: "footer.internalLinks" }}>
                <nav role="navigation">
                  <ul>
                    {footer.internalLinks.map((l, i) => (
                      <li key={i}>
                        {l.link.indexOf("http") !== -1 ? (
                          <a
                            href={l.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link to={l.link}>{l.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </aside>
        )}
        {footer.showSocialLinksColumn && (
          <aside>
            {footer.socialLinks && (
              <div sx={{ variant: "footer.socialLinks" }}>
                <nav role="navigation">
                  <ul>
                    {footer.socialLinks.map((l, i) => (
                      <li key={i}>
                        <a
                          rel="noopener noreferrer"
                          href={l.link}
                          target="_blank"
                        >
                          {getIcon(l.type)}
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </aside>
        )}
      </div>
    </ThemeFooter>
  )
}

export default Footer
