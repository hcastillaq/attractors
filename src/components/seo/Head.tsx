import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};
const HeadSeo: React.FC<Props> = (props: Props) => {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="ElaVgP7AeT3eWe15NIfHZhMzSUEQqUsQFyUJ4y7TdxA"
      />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VBL246FC32"
      ></script>

      <script
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
  );
};

export default HeadSeo;
