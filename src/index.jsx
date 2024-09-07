import {createRoot} from 'react-dom/client';

// import statement to indicate that you need to bundle index.scss
import './index.scss';

// main component
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  );
};

// root finder
const container = document.querySelector('#root');
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
