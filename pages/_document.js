import Document, { Head, Main, NextScript, Html } from "next/document";
import Script from "next/script";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <Head>
        <script
  async
  src='https://www.googletagmanager.com/gtag/js?id=TRACKING-ID'
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', 'TRACKING-ID');`
  }}
></script>
        </Head> 
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
