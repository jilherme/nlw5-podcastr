import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() { // cria-se aqui o MÉTODO render
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main /> {/* o main é onde vai ficar nossa aplicação */}
          <NextScript />
        </body>
      </Html > // html com H maiúsculo e e / antes
    )

  }
}