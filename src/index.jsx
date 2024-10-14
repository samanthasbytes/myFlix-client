import {createRoot} from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import {MainView} from './components/main-view/main-view';
import './index.scss'; // import statement to indicate that you need to bundle index.scss

// main component
const MyFlixApplication = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// root finder
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<MyFlixApplication />); // Tells React to render your app in the root DOM element
