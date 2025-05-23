import React, { useEffect } from 'react';
// Assuming 'in-love.js' will be resolved from node_modules
// or a relevant path depending on the project setup.
// For a local test, you might need to adjust the import path,
// e.g., import { startFallingHearts } from '../../lib/index.js';
import { startFallingHearts } from 'in-love.js';

// Styles for the container (can be in a separate CSS file or inline)
const containerStyles = {
  width: '100%',
  height: '100vh', // Full viewport height
  position: 'relative', // Needed for hearts to position correctly
  overflow: 'hidden', // Hide hearts that go outside bounds
  background: '#f0f0f0', // A light background to see the hearts
};

const FallingHeartsExample = () => {
  useEffect(() => {
    // The startFallingHearts function from in-love.js initializes
    // the falling hearts animation.
    //
    // IMPORTANT NOTE: As of the current version of in-love.js,
    // startFallingHearts() is called automatically when the module is imported.
    // It also sets up its own interval to create hearts.
    // Calling it here ensures it's part of the component's lifecycle conceptually,
    // but be aware of its global auto-start nature.
    //
    // For the effect to work, an HTML element with the ID 'fallinghearts'
    // must exist in the DOM. This component's JSX provides that.
    //
    // Ideally, for more fine-grained control in React (e.g., starting/stopping
    // the effect when the component unmounts), the startFallingHearts function
    // would be refactored to return controls or not auto-start.
    // For now, we just call it to trigger the effect if it hasn't started,
    // or to ensure it's contextually part of this component.

    // Since it auto-starts, calling it again might not be strictly necessary
    // unless the library is changed to prevent auto-start.
    // However, we call it here to show intent.
    startFallingHearts();

    // No cleanup function is returned because the current startFallingHearts
    // sets up a global effect that doesn't offer a cleanup mechanism.
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div id="fallinghearts" style={containerStyles} heart-color="pink">
      <h1>Falling Hearts React Example</h1>
      <p>Pink hearts should be falling if the effect is active!</p>
      {/* The 'heart-color' attribute can be customized */}
    </div>
  );
};

export default FallingHeartsExample;

// To run this example (conceptual):
// 1. Ensure you have React and ReactDOM installed in your project.
// 2. Ensure 'in-love.js' is installed (npm install in-love.js) or linked.
// 3. Render this component in your main application file:
//    import React from 'react';
//    import ReactDOM from 'react-dom/client';
//    import FallingHeartsExample from './examples/react-example/App.js'; // Adjust path
//
//    const root = ReactDOM.createRoot(document.getElementById('root'));
//    root.render(
//      <React.StrictMode>
//        <FallingHeartsExample />
//      </React.StrictMode>
//    );
