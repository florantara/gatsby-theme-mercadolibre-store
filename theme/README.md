<p>
  <img src="http://img.shields.io/npm/v/@florantara/gatsby-theme-mercadolibre-store.svg?style=flat" alt="npm version">
  <img src="https://app.codeship.com/projects/d724b210-9925-0137-7a7c-5a4d2a496d42/status?branch=master" alt="TS checks and linting status">
</p>

Gatsby Theme that imports products from Mercado Libre and shows them on a grid format + detail screen.


## Demo

https://gatsby-theme-mercadolibre-store.netlify.com

<img alt="Demo" src="https://thepracticaldev.s3.amazonaws.com/i/vqmtfn3usif727nsprd1.jpg" width="500">
<br>

### Product Detail
<img alt="Demo" src="https://thepracticaldev.s3.amazonaws.com/i/xorujlvbib8othbgca1u.jpg" width="500">

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

<a href="https://github.com/florantara/gatsby-source-mercadolibre#config" target="_blank">About your MercadoLibre ID and user ></a>

### Paths and Pagination

You can customize the slug for the products listing and the detail page paths.

The default pagination format is a "load more" button, but you can setup "paginated" pagination.

```javascript
{
  resolve: "@florantara/gatsby-theme-mercadolibre-store",
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
}
```

### Title and Logo

In `gatsby-config.js`, use the `siteMetadata` for the `title`. 
We'll use this for SEO, and if there isn't a logo image.

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
Note: we currently don't support using a local image, but this image will be imported into the site. It won't be referenced using the link provided.

## Shadow theme files
To override any file from the theme, create **in your site's `src/` folder**:

```
@florantara/gatsby-theme-mercadolibre-store
```
Then replicate the same folder/file structure from the theme that you want to shadow.

🔌 Remember to restart the server for this to take effect.

## Theming

Most components come with a [Theme UI variant](https://theme-ui.com/guides/variants) setup you can use to style them, or you can style any component that the [Theme Spec](https://theme-ui.com/theme-spec) provides.

[Variants reference >](https://github.com/florantara/gatsby-theme-mercadolibre-store/tree/master/theme/src/settings/variants)

#### Customize the theme

1. Install [lodash](https://lodash.com)
```bash
npm i --save lodash
```

2. Create a folder in your site to store the shadow files:
`yourProjectRoot/src/@florantara/gatsby-theme-mercadolibre-store`



3. Inside that folder create a `settings` folder, and then ` theme.js` file inside of it:

```javascript
// In settings/theme.js
import merge from "lodash/merge"
import { theme as base } from "@florantara/gatsby-theme-mercadolibre-store/src/settings/theme"

export const theme = merge(base, {
  // Your overrides here
})

```
Follow the [Theme UI](https://theme-ui.com/theming) documentation to know what properties to use.


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


[Settings reference >](https://github.com/florantara/gatsby-theme-mercadolibre-store/blob/master/theme/src/settings/site.ts)


Following the same directions as with _Theming_, shadow this file: `settings/siteConfig.js`.

```javascript
// In settings/site.js
import merge from "lodash/merge"
import { siteConfig as base } from "@florantara/gatsby-theme-mercadolibre-store/src/settings/site"

export const siteConfig = merge(base, {
  // Your overrides here
})

```



## Static Pages

The homepage gets created automatically for you with some quick start documentation. Edit it from `yourProjectRoot/static-pages/index.mdx`.

Use [MDX](https://mdxjs.com/) to create pages. Place them in `src/static-pages`.

At the top of the page, setup the `path` and `title` like so:

You can also specify a css `class` that will be added to the page container if you need to add styles to your new page, using the `bodyClass` field.

```md
---
path: "/nueva-pagina"
title: "Nueva Página"
bodyClass: "pageHomepage"
---
```

## Fragments for Pages

There's a few reusable components we are calling "fragments" available:

- Hero
- Paper
- FeaturedProducts
- Layout (width `compact` and `tiny` options)
- Container (wraps everything with a maxWidth container)

...more to come!

## Custom Fragments
You can create as many fragments as you want to use on the MDX pages. These can be buttons, banners, ads, etc.

1. In the shadow folder (read the "Override the settings" if you don't have one yet), create a `fragments` folder, and then an `index.js` file inside, with:

```javascript
// In fragments/index.js
import merge from "lodash/merge"
import { fragments as base } from "@florantara/gatsby-theme-mercadolibre-store/src/fragments/index"

export const fragments = merge(base, {
  // Your new fragments here
})

```

Example:

```javascript
// In fragments/index.js
import merge from "lodash/merge"
import { fragments as base } from "@florantara/gatsby-theme-mercadolibre-store/src/fragments/index"

import { MyCustomButton } from "../components/MyCustomButton";

// Custom fragments
export const fragments = merge(base, {
  MyCustomButton
})

```


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

Use the `clean` command to run `gatsby clean`. This will delete the `public` and `.cache` folders.

```bash
yarn workspace demo clean
```

Then work on the `theme` folder.

### A note on language

The codebase is in english and the content is in spanish, since the soul of the Theme is MercadoLibre and the target users/public are spanish speakers accessibility labels, static and customizable words default to spanish.
