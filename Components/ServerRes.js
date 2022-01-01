export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - Hello World",
        totalResults: "7250000000",
        searchTerms: "Hello World",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "1a8ce88d8f3d84c11",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - Hello World",
        totalResults: "7250000000",
        searchTerms: "Hello World",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "1a8ce88d8f3d84c11",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.427166,
    formattedSearchTime: "0.43",
    totalResults: "7250000000",
    formattedTotalResults: "7,250,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Hello World | Code.org",
      htmlTitle: "<b>Hello World</b> | Code.org",
      link: "https://code.org/helloworld",
      displayLink: "code.org",
      snippet:
        'In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: "Hello World!" Say hello to the world ...',
      htmlSnippet:
        "In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: &quot;<b>Hello World</b>!&quot; Say hello to the world&nbsp;...",
      cacheId: "TWg46TeXY_8J",
      formattedUrl: "https://code.org/helloworld",
      htmlFormattedUrl: "https://code.org/<b>helloworld</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3ISD0H1ReEh2CCEWMdDQAeOtVTzO42YiWocPWa5Jnqq6z8_BYniiBtEk",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
            "og:type": "article",
            "twitter:title": "Hello World!",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "og:site_name": "Code.org",
            "og:title": "Hello World!",
            "og:image:height": "630",
            "og:description":
              "Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity!",
            "article:publisher": "https://www.facebook.com/Code.org",
            "twitter:image:src":
              "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
            "fb:app_id": "500177453358606",
            viewport:
              "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity",
            "og:url": "https://code.org/helloworld",
          },
        ],
        cse_image: [
          {
            src: "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: '"Hello, World!" program - Wikipedia',
      htmlTitle: "&quot;<b>Hello</b>, <b>World</b>!&quot; program - Wikipedia",
      link: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program",
      displayLink: "en.wikipedia.org",
      snippet:
        'A "Hello, World!" program is generally a computer program that outputs or displays the message "Hello, World!". This program is very simple to write in many ...',
      htmlSnippet:
        "A &quot;<b>Hello</b>, <b>World</b>!&quot; program is generally a computer program that outputs or displays the message &quot;<b>Hello</b>, <b>World</b>!&quot;. This program is very simple to write in many&nbsp;...",
      cacheId: "UInCiDfJyeUJ",
      formattedUrl: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/%22<b>Hello</b>,_<b>World</b>!%22_program",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdPKf1HlvunGPYl1tQ0jpqM0bs8G2FoqnKQmEvoKCmBe1r1EkFDM2d61ct",
            width: "214",
            height: "235",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:type": "website",
            "og:title": '"Hello, World!" program - Wikipedia',
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hello_World_Brian_Kernighan_1978.jpg/220px-Hello_World_Brian_Kernighan_1978.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World",
      htmlTitle: "<b>Hello World</b>",
      link: "https://www.helloworldstudio.org/",
      displayLink: "www.helloworldstudio.org",
      snippet:
        "Hello World. Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and ...",
      htmlSnippet:
        "<b>Hello World</b>. Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and&nbsp;...",
      cacheId: "7GkArFo05XQJ",
      formattedUrl: "https://www.helloworldstudio.org/",
      htmlFormattedUrl: "https://www.<b>helloworlds</b>tudio.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSFkv-uRBHril5to7j1Mj0orAU5dCpBnUK4huU6LbxGPSWID9yvFiTRHs",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            "twitter:title": "Hello World",
            "twitter:card": "summary",
            "og:site_name": "Hello World",
            viewport: "width=device-width, initial-scale=1",
            "twitter:url": "https://www.helloworldstudio.org",
            "twitter:description":
              "Hello World   Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and empower next generation innovators     Virtual Courses",
            "og:title": "Hello World",
            "og:url": "https://www.helloworldstudio.org",
            "og:description":
              "Hello World   Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and empower next generation innovators     Virtual Courses",
          },
        ],
        cse_image: [
          {
            src: "https://static1.squarespace.com/static/56f18ec601dbae5d39d46fe8/t/5a7626f8085229a616404e87/1517692664897/HWS-4018.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World - Lifestyle & Gift Shop",
      htmlTitle: "<b>Hello World</b> - Lifestyle &amp; Gift Shop",
      link: "https://shophelloworld.com/",
      displayLink: "shophelloworld.com",
      snippet:
        "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are ...",
      htmlSnippet:
        "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are&nbsp;...",
      cacheId: "nXxyhCa9L0sJ",
      formattedUrl: "https://shophelloworld.com/",
      htmlFormattedUrl: "https://shop<b>helloworld</b>.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTaOIsQSVGTPPVjsgxB5YJVkb5mLxOuP4SuW0lT1pDOxoJMwnxgn7NZDhQ",
            width: "225",
            height: "225",
          },
        ],
        organization: [
          {
            name: "Hello World",
            logo: "https://cdn.shopify.com/s/files/1/0043/9642/files/HelloWorldLogo2020_whiteontransparent_260x.png?v=1636997634",
            url: "https://shophelloworld.com/",
          },
        ],
        metatags: [
          {
            "og:image":
              "http://cdn.shopify.com/s/files/1/0043/9642/files/HelloWorldLogo2020_whiteontransparent_1200x1200.png?v=1636997634",
            "theme-color": "#12ce8c",
            "og:type": "website",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World - Lifestyle & Gift Shop",
            "og:site_name": "Hello World",
            "og:title": "Hello World - Lifestyle & Gift Shop",
            "og:image:height": "628",
            "shopify-checkout-api-token": "5725ca2823da741bd6feea4776d60b94",
            "og:description":
              "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are met.",
            "og:image:secure_url":
              "https://cdn.shopify.com/s/files/1/0043/9642/files/HelloWorldLogo2020_whiteontransparent_1200x1200.png?v=1636997634",
            viewport: "width=device-width,initial-scale=1.0",
            "twitter:description":
              "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are met.",
            "shopify-digital-wallet": "/439642/digital_wallets/dialog",
            "og:url": "https://shophelloworld.com/",
          },
        ],
        cse_image: [
          {
            src: "http://cdn.shopify.com/s/files/1/0043/9642/files/HelloWorldLogo2020_whiteontransparent_1200x1200.png?v=1636997634",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World (film) - Wikipedia",
      htmlTitle: "<b>Hello World</b> (film) - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Hello_World_(film)",
      displayLink: "en.wikipedia.org",
      snippet:
        "Hello World (Japanese: ハロー・ワールド), stylized as HELLO WORLD, is a 2019 Japanese animated science fiction romantic drama film directed by Tomohiko Itō ...",
      htmlSnippet:
        "<b>Hello World</b> (Japanese: ハロー・ワールド), stylized as <b>HELLO WORLD</b>, is a 2019 Japanese animated science fiction romantic drama film directed by Tomohiko Itō&nbsp;...",
      cacheId: "hbHB-0KBgrkJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Hello_World_(film)",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/<b>Hello</b>_<b>World</b>_(film)",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHQTFEsfsq9yOUAcGyC8ezpcqKL6JZsfpsZfUDK53Jb7y8p88DVA9pKDrB",
            width: "194",
            height: "260",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/en/a/a8/HELLOWORLD.jpg",
            "og:image:width": "1200",
            "og:type": "website",
            "og:title": "Hello World (film) - Wikipedia",
            "og:image:height": "1610",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://upload.wikimedia.org/wikipedia/en/a/a8/HELLOWORLD.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World | Microsoft Docs",
      htmlTitle: "<b>Hello World</b> | Microsoft Docs",
      link: "https://docs.microsoft.com/en-us/shows/hello-world/",
      displayLink: "docs.microsoft.com",
      snippet:
        "Dec 16, 2021 ... Hello World is a 60 minutes live show every Wednesday and Thursday on LearnTV. Hello World is made up of special guests, quick demo and LIVE ...",
      htmlSnippet:
        "Dec 16, 2021 <b>...</b> <b>Hello World</b> is a 60 minutes live show every Wednesday and Thursday on LearnTV. <b>Hello World</b> is made up of special guests, quick demo and LIVE&nbsp;...",
      cacheId: "7K1S5aN0gogJ",
      formattedUrl: "https://docs.microsoft.com/en-us/shows/hello-world/",
      htmlFormattedUrl:
        "https://docs.microsoft.com/en-us/shows/<b>hello</b>-<b>world</b>/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHsQKBH1AvCKh9mB5ggc-xC3IifveIimapXft6S0---n8gYeofeOESAAk",
            width: "225",
            height: "225",
          },
        ],
        organization: [
          {
            url: "https://www.microsoft.com/",
          },
        ],
        metatags: [
          {
            schema: "Show",
            "og:image":
              "https://docs.microsoft.com/en-us/media/logos/logo-ms-social.png",
            "twitter:card": "summary",
            "ms.topic": "tutorial",
            page_type: "show",
            document_id: "546dd1d1-a8b7-9770-ce8c-a82a3d7d2f27",
            locale: "en-us",
            type: "show",
            "og:description":
              "Hello World is a 60 minutes live show every Wednesday and Thursday on LearnTV. Hello World is made up of special guests, quick demo and LIVE Q&A. Come for a specific segment, please bring your questions as we have Q&A and the chat is open. Hello World is meant to be fun and educational to the viewing audience who are interested in Microsoft products and Microsoft current events.Schedule coming up in December:Dec 1   - Azure Cost Management to the rescueDec 2   - A Tour of Azure Cognitive ServicesDec 15 - Let's get Started with GitHubDec 16 - Hello World, Amazing Community DemosAdd the Hello World show schedule to your calendar with this Invite - https://aka.ms/helloworld/reminder.",
            depot_name: "MSDN.show",
            uid: "hello-world",
            "twitter:site": "@docsmsft",
            updated_at: "2021-12-16 03:10 PM",
            original_content_git_url:
              "https://github.com/MicrosoftDocs/show-pr/blob/live/shows/hello-world/index.yml",
            presentedlocale: "en",
            "ms.prod": "non-product-specific",
            "og:type": "website",
            "og:image:alt": "Microsoft Logo",
            author: "markdefalco",
            "og:title": "Hello World",
            "color-scheme": "light dark",
            site_name: "Docs",
            viewport: "width=device-width, initial-scale=1.0",
            breadcrumb_path: "/shows/breadcrumb/toc.json",
            document_version_independent_id:
              "546dd1d1-a8b7-9770-ce8c-a82a3d7d2f27",
            imageurl: "media/helloworld_383x215.png",
            "og:url": "https://docs.microsoft.com/en-us/shows/hello-world/",
            uhfheaderid: "MSDocsHeader-Shows",
            gitcommit:
              "https://github.com/MicrosoftDocs/show-pr/blob/457bd246131a1d83f680b747afa423069419a7e8/shows/hello-world/index.yml",
          },
        ],
        cse_image: [
          {
            src: "https://docs.microsoft.com/en-us/media/logos/logo-ms-social.png",
          },
        ],
        listitem: [
          {
            item: "Docs",
            name: "Docs",
            position: "1",
          },
          {
            item: "Shows",
            name: "Shows",
            position: "2",
          },
          {
            name: "Hello World",
            position: "3",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World",
      htmlTitle: "<b>Hello World</b>",
      link: "https://blog.twitter.com/en_us/a/2010/hello-world",
      displayLink: "blog.twitter.com",
      snippet:
        "Apr 13, 2010 ... You will start to see Tweets promoted by our partner advertisers called out at the top of some Twitter.com search results pages. We strongly ...",
      htmlSnippet:
        "Apr 13, 2010 <b>...</b> You will start to see Tweets promoted by our partner advertisers called out at the top of some Twitter.com search results pages. We strongly&nbsp;...",
      cacheId: "TBy_h3t0O_wJ",
      formattedUrl: "https://blog.twitter.com/en_us/a/2010/hello-world",
      htmlFormattedUrl:
        "https://blog.twitter.com/en_us/a/2010/<b>hello</b>-<b>world</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfoe0QfrJ_jxo4DtDyHsoCChHhb1f650YOICKA7Tc3Fk2maH90twWgQVc",
            width: "310",
            height: "162",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#2d89ef",
            "og:image":
              "https://blog.twitter.com/content/dam/blog-twitter/official/universal-assets/Generic_BlogShare.jpg.twimg.768.jpg",
            "og:type": "article",
            "twitter:card": "summary_large_image",
            "theme-color": "#2aa3ef",
            "twitter:site": "Twitter",
            viewport: "width=device-width, initial-scale=1",
            "twitter:widgets:csp": "on",
            "og:title": "Hello World",
            "twitter:widgets:new-embed-design": "on",
            "og:url": "https://blog.twitter.com/en_us/a/2010/hello-world",
            "og:description": "Hello World",
          },
        ],
        cse_image: [
          {
            src: "https://blog.twitter.com/content/dam/blog-twitter/official/universal-assets/Generic_BlogShare.jpg.twimg.768.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "TransCultural Exchange's Hello World",
      htmlTitle: "TransCultural Exchange&#39;s <b>Hello World</b>",
      link: "https://transculturalexchange.org/activities/hw/overview.htm",
      displayLink: "transculturalexchange.org",
      snippet:
        "Hello World is a virtual travelogue of art works created by nearly 250 artists working in Europe, Africa, Asia, the Americas and Australia, available <here> ...",
      htmlSnippet:
        "<b>Hello World</b> is a virtual travelogue of art works created by nearly 250 artists working in Europe, Africa, Asia, the Americas and Australia, available &lt;here&gt;&nbsp;...",
      cacheId: "GpfyV5YUczwJ",
      formattedUrl:
        "https://transculturalexchange.org/activities/hw/overview.htm",
      htmlFormattedUrl:
        "https://transculturalexchange.org/activities/hw/overview.htm",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRuJ3xcvAfDxA4fiWTv2VyzaVyjKOcYY0u6rq16cKH6U1wYHBoiCTGw",
            width: "148",
            height: "100",
          },
        ],
        metatags: [
          {
            handheldfriendly: "True",
            "msvalidate.01": "CD34BC3A763818451163956207EA984F",
            viewport:
              "width=device-width, user-scalable=yes, initial-scale=1.0",
            author: "RudiPunzo",
            mobileoptimized: "320",
          },
        ],
        cse_image: [
          {
            src: "https://transculturalexchange.org/about/logo/TCElogonero.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World widgets | ServiceNow Docs",
      htmlTitle: "<b>Hello World</b> widgets | ServiceNow Docs",
      link: "https://docs.servicenow.com/bundle/rome-servicenow-platform/page/build/service-portal/concept/hello-world-widget.html",
      displayLink: "docs.servicenow.com",
      snippet:
        "The Hello World widgets are included with Service Portal as examples of how to use and create widgets. You can use this base system widget as-is in your ...",
      htmlSnippet:
        "The <b>Hello World</b> widgets are included with Service Portal as examples of how to use and create widgets. You can use this base system widget as-is in your&nbsp;...",
      formattedUrl:
        "https://docs.servicenow.com/bundle/rome.../hello-world-widget.html",
      htmlFormattedUrl:
        "https://docs.servicenow.com/bundle/rome.../<b>hello</b>-<b>world</b>-widget.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQcTcx2STd3RXXByaLy5d-HN74EFSQ4oOFMz-ASuwa2ik7b7771uVTc5bGs",
            width: "304",
            height: "166",
          },
        ],
        metatags: [
          {
            "dc.publisher": "ServiceNow",
            copyright: "(C) Copyright 2021",
            viewport: "width=device-width,initial-scale=1.0",
            "dc.creator": "ServiceNow",
            "dc.format": "XHTML",
            "dc.date.modified": "2021-07-22T12:00:00-08:00",
            "dc.date.created": "2021-07-22T12:00:00-08:00",
            "dc.identifier": "hello-world-widget",
            "dc.subject": "Hello World widgets",
            "dc.rights.owner": "(C) Copyright 2021",
            "zoomin:guidename": "Rome Now Platform Capabilities",
            "dc.contributor": "ServiceNow",
          },
        ],
        cse_image: [
          {
            src: "https://docs.servicenow.com/bundle/rome-servicenow-platform/page/build/service-portal/image/HelloWorld1.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Hello World, Episode 9: Inside Russia's Creepy, Innovative Internet",
      htmlTitle:
        "<b>Hello World</b>, Episode 9: Inside Russia&#39;s Creepy, Innovative Internet",
      link: "https://www.bloomberg.com/features/2016-hello-world-russia/",
      displayLink: "www.bloomberg.com",
      snippet:
        "Nov 30, 2016 ... Russia is one of only a handful of countries to have developed its own internet, including its own search engines, e-mail systems, and social ...",
      htmlSnippet:
        "Nov 30, 2016 <b>...</b> Russia is one of only a handful of countries to have developed its own internet, including its own search engines, e-mail systems, and social&nbsp;...",
      cacheId: "y2VcXONQIXQJ",
      formattedUrl:
        "https://www.bloomberg.com/features/2016-hello-world-russia/",
      htmlFormattedUrl:
        "https://www.bloomberg.com/features/2016-<b>hello</b>-<b>world</b>-russia/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8dGFx35Oxgak_ldVP7GL4MWWTihhmrTNvb0wwqjpIK24ICHwA6GYMP68",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.bloomberg.com/features/2016-hello-world-russia/img/Russia-social.jpg",
            "og:type": "article",
            "twitter:card": "summary",
            "og:site_name": "Bloomberg.com",
            "parsely-post-id": "2016-hello-world-russia",
            "og:title": "Inside Russia’s Creepy, Innovative Internet",
            "parsely-author": "Ashlee Vance",
            "og:description":
              "Hello World, Episode 9: Grab yourself a vodka and witness the bizarre spectacle that is Russian technology.",
            "parsely-title": "Inside Russia’s Creepy, Innovative Internet",
            "og:longtitle": "Inside Russia’s creepy, innovative internet",
            "parsely-pub-date": "2016-11-30T09:00:00+04:00",
            "parsely-type": "post",
            "parsely-tags":
              "Hello World, technology, internet, innovation, robotics, startups, Russia, Moscow, Siberia",
            "twitter:site": "@business",
            viewport: "width=device-width, initial-scale=1",
            "parsely-link":
              "http://www.bloomberg.com/features/2016-hello-world-russia/",
            "parsely-image-url":
              "https://www.bloomberg.com/features/2016-hello-world-russia/img/Russia-social.jpg",
            "parsely-section": "technology",
            "og:url":
              "http://www.bloomberg.com/features/2016-hello-world-russia/",
          },
        ],
        cse_image: [
          {
            src: "https://www.bloomberg.com/features/2016-hello-world-russia/img/Russia-social.jpg",
          },
        ],
      },
    },
  ],
};
