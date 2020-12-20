import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, img } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Serkan Algur - Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Serkan Algur - Developer'} />
        <meta property="og:title" content="Serkan Algur | Developer" />
        <meta property="og:site_name" content="Serkan Algur | Developer" />
        <meta property="og:url" content="https://serkanalgur.com.tr" />
        <meta property="og:description" content={description || 'Serkan Algur - Developer'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="serkanalgur" />
        <meta name="twitter:title" content="Serkan Algur | Developer" />
        <meta name="twitter:description" content={description || 'Serkan Algur - Developer'} />
        <meta name="twitter:image" content={img} />
      </Helmet>
      <App />
    </>
  );
};
