# this

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


При работе в режиме SSR, при первом подключении клиента к беку и  сборке страницы все запросы к API идут синхронно, и из за этого время на сборку приложения может достигать 1.5-3 секунд.

Запросы с браузера потом идут асинхронно, и никаких проблем нет


Нужно настроить приложение таким образом чтобы при сборке на сервере, запросы шли так же асинхронно как и на клиенте