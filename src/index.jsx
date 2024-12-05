import React from 'react';
import {createRoot} from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import {MainView} from './components/main-view/main-view';
import './index.scss'; // import statement to indicate that you need to bundle index.scss
import {store} from './redux/store';
import {Provider} from 'react-redux';

// main component
const MyFlixApplication = () => {
  return (
    <Provider store={store}>
      <Container>
        <MainView />
      </Container>
    </Provider>
  );
};

// root finder
const container = document.querySelector('#root');
const root = createRoot(container);

// tells React to render your app in the root DOM
root.render(
  <React.StrictMode>
    <MyFlixApplication />
  </React.StrictMode>
);
