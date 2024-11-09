import { FC, PropsWithChildren } from "react";
import "./../sass/styles.scss";

export const metadata = {
  title: "G-ART",
  description:
    "This is a collection of art simulations based in chaos attractors created with particles. Each simulation has its own configuration and behavior. You can play with the configurations and see how the particles behave in different scenarios.",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en-EN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
