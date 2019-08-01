[![npm version](http://img.shields.io/npm/v/@florantara/gatsby-theme-mercadolibre-store.svg?style=flat)](https://www.npmjs.com/package/@florantara/gatsby-theme-mercadolibre-store "View this project on npm")

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/florantara/gatsby-theme-mercadolibre-store)

## Demo

A fresh install, with some default data:
https://gatsby-theme-mercadolibre-store.netlify.com

## Motivation

A few months ago I started chatting with some friends from Argentina (where I'm from) about how they are handling their e-commerces. Being a web developer means you get to help your friends with their digital challenges, and I love that.

I realized how resourceful entrepreneurs are nowadays: they use social media a lot and publish the products they are selling wherever they can.

MercadoLibre is a large platform that is conquering the online sales of Latin America, where the average user still doesn't fully trust buying things online from sites they don't know. They provide a wide range of tools for them to sell their stuff, and they excell at that.

Going back to my friends, they all share one thing: they managed to create a website showcasing their products by using either TiendaNube (similar to Shopify), a WordPress site, or some other creative way, but we all know the pitfalls those have... starting with costs and performance, followed by: they have to do the process of managing stock twice.

So I wanted to create a Gatsby site for them ("them" are "several different entrepreneurs with their own stores") that can use the data they already uploaded into ML.

I started creating a Gatsby [source plugin](https://github.com/florantara/gatsby-source-mercadolibre).

When I finished it, I was about to start coding each website, but Gatsby Themes launched, YAY!!! So instead of creating multiple sites, I created a theme.

## Features

- Sources from a [MercadoLibre](https://www.mercadolibre.com/) user.
- Creates a Products grid and a Product detail screen.
- Offers a "load more" button as the default pagination, and the ability to "paginate" into pages.
- Uses [Theme UI](https://theme-ui.com) leveraging variants.
- Uses [MDX](https://mdxjs.com/) for static pages, and provides fragments.
- Written in TypeScript 👮‍♀️

... more! and [more to come](https://github.com/florantara/gatsby-theme-mercadolibre-store/projects/1?fullscreen=true).

## Install

From your Gatsby site's root:

```bash
npm install @florantara/gatsby-theme-mercadolibre-store
```

or

```bash
yarn add @florantara/gatsby-theme-mercadolibre-store
```

## Setup

### Import data

Open `gatsby-config.js` and configure it under `plugins`.

```javascript
{
  resolve: "@florantara/gatsby-theme-mercadolibre-store",
  options: {
    mercadoLibre: {
      siteID: "yoursiteid",
      user: "youruser"
    },
  },
}
```

<a href="https://github.com/florantara/gatsby-source-mercadolibre/#readme" target="_blank">About your MercadoLibre ID and user ></a>

### Paths and Pagination

You can customize the slug for the products listing and the detail page paths.

The default pagination format is a "load more" button, but you can setup "paginated" pagination.

```javascript
options: {
  productDetail: {
    slug: "producto",
  },
  productsListing: {
    slug: "productos",
    enablePagination: true, // defaults to false
    productsListingPerPage: 3
  },
}
```

### Title and Logo

Use the `siteMetadata` for the `title`. We'll use this for SEO, and if there isn't a logo image.

```javascript
siteMetadata: {
  title: "Plants Store",
}
```

To import a logo, configure:

```javascript
options: {
  site: {
    logoURL:
      "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg",
    }
  }
}
```

## Theming

Most components come with a [Theme UI variant](https://theme-ui.com/guides/variants) setup you can use to style them, or you can style any component that the [Theme Spec](https://theme-ui.com/theme-spec) provides.

[Variants reference >](https://github.com/florantara/gatsby-theme-mercadolibre-store/tree/master/theme/src/settings/variants)

#### Override the settings

Create the file `settings/theme.js` in the site's `src` folder and add the following:

```javascript
import { theme as baseTheme } from "@florantara/gatsby-theme-mercadolibre-store/src/settings/theme";

export const theme = {
  ...baseTheme
  // Your overrides here
};
```

#### Typography

The theme uses [Roboto](https://fonts.google.com/specimen/Roboto) for the body and headings too.

You can configure any other typography you want in the `theme` settings - after importing it to your site with a plugin such as [gatsby-plugin-prefetch-google-fonts](https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts/).

Use the [`fonts`](https://theme-ui.com/theming#typography) property of Theme UI.

```javascript
fonts: {
  heading: "Roboto, system-ui, sans-serif",
  body: "Roboto, system-ui, sans-serif",
}
```

## Site settings

We provide a set of settings for hiding/showing things, like the price on the products and the category, and also other site-wide configurations.

Following the same directions as with _Theming_, shadow this file: `settings/siteConfig.js`.

```javascript
import { siteConfig as baseSiteConfig } from "@florantara/gatsby-theme-mercadolibre-store/src/settings/theme";

export const siteConfig = {
  ...baseSiteConfig
  // Your overrides here
};
```

[Settings reference >](https://github.com/florantara/gatsby-theme-mercadolibre-store/blob/master/theme/src/settings/site.ts)

## Static Pages

The homepage gets created automatically for you with some quick start documentation. Edit it from `static-pages/index.mdx`.

Use [MDX](https://mdxjs.com/) to create pages. Place them in `src/static-pages`.

At the top of the page, setup the `path` in the `frontmatter` data:

```md
---
path: "/nueva-pagina"
title: "Nueva Página"
---
```

## Fragments for MDX pages

There's a few reusable components we are calling "fragments" available:

- Hero
- Paper
- FeaturedProducts
- Layout (width `compact` and `tiny` options)

...more to come!

## Performance

Lighthouse scores for the Products Listing page (which has many images).

🔥
![Lighthouse](https://s3-us-west-2.amazonaws.com/s.cdpn.io/575957/gatsby-theme-performance.png "Lighthouse scores")

## Accessibility

Navigating with Tabs:

![](https://thepracticaldev.s3.amazonaws.com/i/zo6u02o8i821qjeom7zl.gif)

# Contributions

I'd love to hear ideas of features or improvements.

If you are considering using this Theme and would love some feature [let me know](mailto:florenciaantara@gmail.com)!

Found an issue? Please submit it [here](https://github.com/florantara/gatsby-theme-mercadolibre-store/issues/new)

## Fork

Upon forking this repository, setup the environment running this from the root of the cloned repo:

```bash
yarn
```

```bash
yarn workspace demo develop
```

I've added a `clean` command that runs `gatsby clean`

```bash
yarn workspace demo clean
```

Then work on the `theme` folder.

### A note on language

The codebase is in english and the content is in spanish, since the soul of the Theme is MercadoLibre and the target users/public are spanish speakers accessibility labels, static and customizable words default to spanish.
