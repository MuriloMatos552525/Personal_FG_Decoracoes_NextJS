// src/pages/_app.tsx

import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.scss'; // Importa os estilos globais
import { AppProps } from 'next/app';
import Script from 'next/script';
import CookieConsent from 'react-cookie-consent';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consentCookie = localStorage.getItem('cookieConsent');
    if (consentCookie === 'true') {
      setConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsent(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setConsent(false);
  };

  return (
    <>
      {/* Configuração Padrão de SEO */}
      <DefaultSeo
        title="FG Decorações - Pedras Naturais de Alta Qualidade"
        description="Especializada na comercialização de pedras naturais, oferecendo uma ampla variedade de produtos de alta qualidade."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.fgdecoracoes.com.br/',
          site_name: 'FG Decorações',
        }}
      />

      {consent && (
        <>
          {/* Global Site Tag (gtag.js) - Google Ads */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-874-215-7856" // Substitua AW-XXXXXXXXXX pelo seu ID do Google Ads
          />
          <Script
            id="google-ads"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-874-215-7856'); // Substitua AW-XXXXXXXXXX pelo seu ID do Google Ads
              `,
            }}
          />

          {/* Google Tag Manager */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NW2HVP6S');
              `,
            }}
          />
        </>
      )}

      <Component {...pageProps} />

      <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        declineButtonText="Recusar"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        buttonStyle={{
          background: "#4e503b",
          color: "#ffffff",
          fontSize: "14px",
        }}
        declineButtonStyle={{
          background: "#c0392b",
          color: "#ffffff",
          fontSize: "14px",
        }}
        style={{
          background: "#2B373B",
          color: "#ffffff",
          fontSize: "14px",
        }}
      >
        Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com o uso de cookies.
      </CookieConsent>
    </>
  );
}

export default MyApp;
