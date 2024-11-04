import { FC, PropsWithChildren } from "react";
import "./../sass/styles.scss";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en-EN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>G-ART</title>

        {/* meta description */}
        <meta name="description" content="Generative art with particles" />

        {/* google site verification */}
        <meta
          name="google-site-verification"
          content="ElaVgP7AeT3eWe15NIfHZhMzSUEQqUsQFyUJ4y7TdxA"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
