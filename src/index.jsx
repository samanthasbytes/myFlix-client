import {createRoot} from 'react-dom/client';
import {MainView} from './components/main-view/main-view';
import './index.scss'; // import statement to indicate that you need to bundle index.scss

// main component
const MyFlixApplication = () => {
  return <MainView />;
};

// root finder
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<MyFlixApplication />); // Tells React to render your app in the root DOM element
