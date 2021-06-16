import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { siteMetadata, headData } from '../mock/data';

export default () => {
  const { title, lang, description } = headData;
  return (
    <>
      <Helmet
        meta={[
          {
            name: `description`,
            content: siteMetadata.description,
          },
          {
            name: `google-site-verification`,
            content: '',
          },
          {
            property: `og:title`,
            content: siteMetadata.title,
          },
          {
            property: `og:description`,
            content: siteMetadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: siteMetadata.description,
          },
        ]}
      >
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </>
  );
};
