import "./../../node_modules/basscss/css/basscss.min.css";
import "./../sass/styles.scss";
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
