import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="es-ES">
				<Head>
					<meta
						name="google-site-verification"
						content="ElaVgP7AeT3eWe15NIfHZhMzSUEQqUsQFyUJ4y7TdxA"
					/>

					<Script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-VBL246FC32"
					/>

					<Script
						dangerouslySetInnerHTML={{
							__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'G-VBL246FC32');`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
