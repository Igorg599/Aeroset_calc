import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./internationalization/i18n";
import {GlobalStyle} from "./globalStyle";
import * as serviceWorker from './serviceWorker';
// @ts-ignore
import initWorkboxRefresh from '@loopmode/cra-workbox-refresh';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Suspense fallback="">
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register({
  onUpdate: (registration: any) => {
      // @ts-ignore
      return initWorkboxRefresh(registration, {render: renderRefreshUI});
  }
})