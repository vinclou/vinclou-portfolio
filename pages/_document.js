import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* This font is not loaded */}
          <link
            rel="preload"
            href="/Inter-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* Counter.dev tracking link, test if it works*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"vinclou",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`
            }}
          ></script>

          <meta name="yandex-verification" content="ad862eefae104198" />
          <meta
            name="google-site-verification"
            content="2rwrkFw1RI9b-S35S2S4M6T19Hx3nq2YT_fq7ruvi9k"
          />

          {/*
						THESE ARE ALL THE ICONS I WOULD HAVE TO ADD LATER ON
						<link href="/static/favicons/favicon.ico" rel="shortcut icon" />
						<link href="/static/favicons/site.webmanifest" rel="manifest" />
						<link
							href="/static/favicons/apple-touch-icon.png"
							rel="apple-touch-icon"
							sizes="180x180"
						/>
						<link
							href="/static/favicons/favicon-32x32.png"
							rel="icon"
							sizes="32x32"
							type="image/png"
						/>
						<link
							href="/static/favicons/favicon-16x16.png"
							rel="icon"
							sizes="16x16"
							type="image/png"
						/>
						<link
							color="#4a9885"
							href="/static/favicons/safari-pinned-tab.svg"
							rel="mask-icon"
						/>
						<meta content="#ffffff" name="theme-color" />
						<meta content="#ffffff" name="msapplication-TileColor" />
						<meta
							content="/static/favicons/browserconfig.xml"
							name="msapplication-config"
						/>
					*/}
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
