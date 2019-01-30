# Ghost Gastby Starter Mini

A mini version of the original starter template to build lightning fast websites with [Ghost](https://ghost.org) & [Gatsby](https://gatsbyjs.org).

I stripped out the CSS, custom components and any Netlify related files from [gatsby-starter-ghost](https://github.com/TryGhost/gatsby-starter-ghost).
You only get a very basic index page and a basic posts page. The other pages can still be enabled as described in this documentation below.

[**Demo**](http://ghost-gatsby-demo.nishantdania.com)

![ghost-gatsby-starter-mini](https://user-images.githubusercontent.com/1717441/51983987-2d68fd00-24d5-11e9-9123-db9f2ef8caeb.png)

# Installing

```bash
# With Gatsby CLI
gatsby new personal-blog https://github.com/nishantdania/ghost-gatsby-starter-mini
```

Then install dependencies

```bash
yarn
```

# Running

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```

By default, the starter will populate content from a default Ghost install located at https://gatsby.ghost.io.

To use your own install, edit the `.ghost.json` config file with your credentials. You can find or your `contentApiKey` in the "Integrations" screen in Ghost Admin.

Content API Keys are generally not considered to be sensitive information, they exist so that they can be changed in the event of abuse so most people commit it directly to their `ghost.json` config file. If you prefer to keep this information out of your repository you can remove this config and set [Netlify ENV variables](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables) for production builds instead.

# Open community page
You can join the spectrum chat group for any questions around implementation to or maybe just for the sake of show and tell >> [Ghost Gatsby Spectrum](https://spectrum.chat/ghost-gatsby)

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.

# Extra options

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `dev` config in `ghost.json` - while Gatsby `serve` uses the `production` config.

# Site config
Some config variables used for adding meta data can be defined in the `src/utils/siteConfig.js` file. 

# Enabling the author, tags and page templates
Please use this file from the gatsby-source-ghost project as a reference >> [gatsby-node.js](https://github.com/TryGhost/gatsby-starter-ghost/blob/master/gatsby-node.js)

# Shoutout
A huge shoutout to the Ghost team for getting the original version out. 

# Copyright & License

Copyright (c) 2019 Nishant Dania Released under the [MIT license](LICENSE).
