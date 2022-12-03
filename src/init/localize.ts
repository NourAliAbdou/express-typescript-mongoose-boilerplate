import { Express } from 'express';
const i18next = require('i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-http-middleware');

export default function (app: Express) {
  i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
      {
        backend: {
          loadPath: __dirname + '/locales/{{lng}}/translation.json',
          addPath: __dirname + '/locales/ar/{{ns}}.json',
        },
        fallbackLng: 'ar',
        preload: ['en', 'ar'],
        supportedLngs: ['en', 'ar'],
        cleanCode: true,
      },
      (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        console.log(t('home.title')); 
      },
    );

  app.use(
    i18nextMiddleware.handle(i18next, {
    }),
  );
}
