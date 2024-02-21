import '../styles/global.css';

// used to import global style
// global style can only be imported in _app.js
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
