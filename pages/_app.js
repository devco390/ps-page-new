import { ThemeProvider } from "styled-components";
import Head from "next/head";

import GlobalStyles from "src/styles/global";
import theme from "src/styles/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          Mantenimiento, reparación y venta de suministros para Impresoras
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="es" />
        <meta
          name="description"
          content="Realizamos Mantenimiento y Reparación de Impresoras a Domicilio Servicio Garantizado. Contamos con Técnicos Altamente Calificados en Todo Tipo de Impresoras."
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

        <meta property="og:title" content="Printing solutions" />
        <meta
          property="og:description"
          content="Realizamos Mantenimiento y Reparación de Impresoras a Domicilio Servicio Garantizado. Contamos con Técnicos Altamente Calificados en Todo Tipo de Impresoras."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.printingsolutions.com.co/"
        />
        <meta
          property="og:image"
          content="https://www.printingsolutions.com.co/assets/images/logo.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@flickr" />
        <meta
          name="twitter:title"
          content="Small Island Developing States Photo Submission"
        />
        <meta name="twitter:description" content="View the album on Flickr." />
        <meta
          name="twitter:image"
          content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
