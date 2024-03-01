// pages/_app.js
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

// Import any other global CSS files here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
