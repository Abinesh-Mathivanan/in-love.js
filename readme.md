# in-love.js

`in-love.js` is a versatile JavaScript library designed to add romantic visual effects to your web pages. With features like falling sakura petals, pulsing hearts, fading messages, and falling hearts, you can effortlessly create a charming and enchanting atmosphere.

<img src="https://github.com/Abinesh-Mathivanan/in-love.js/assets/113496287/b2826419-f5fc-4a3e-b277-9033dc363634" alt="Logo" width="800" height="500"> 


## Features

- **Heart Bloom Animation**: Draws a blooming heart shape using a canvas.
- **Sakura Falling Petals**: Adds a beautiful sakura (cherry blossom) petal falling effect.
- **Fade Message**: Displays messages that fade in and out.
- **Pulsing Heart**: Creates a heart that pulses with a gentle glow.
- **Falling Hearts**: Animates falling heart shapes across the screen.
- **Glitter Cursor**: Adds a sparkling effect to the cursor when enabled.
- **Resizable Window Support**: Adjusts animations based on window size changes.
- **Customizable Colors**: Easily change the colors of animations through script attributes.

## Installation

You can include `in-love.js` in your project by downloading the library or using npm.

Run the following command in your terminal:

```bash
npm i in-love.js
```

## Usage with React

You can import and use the animation functions from `in-love.js` directly into your React components.

First, make sure you have installed the package via npm:
```bash
npm i in-love.js
```

Then, you can import specific functions into your React component. For example, to use the `startFallingHearts` animation:

```javascript
import React, { useEffect } from 'react';
import { startFallingHearts } from 'in-love.js';

const MyRomanticComponent = () => {
  useEffect(() => {
    // It's recommended to call the animation function within a useEffect hook.
    // This ensures the animation starts when the component mounts.
    startFallingHearts();

    // Note: Some animations in this library might auto-initialize upon import
    // or might not offer explicit cleanup functions. Refer to the specific
    // function's behavior or the examples provided.
  }, []); // Empty dependency array makes it run once on mount

  return (
    // Ensure necessary HTML structure for the animation is present.
    // For startFallingHearts, an element with id="fallinghearts" is needed.
    <div id="fallinghearts" style={{ width: '100%', height: '100vh' }} heart-color="red">
      {/* Your component content */}
    </div>
  );
};

export default MyRomanticComponent;
```

For a more detailed example, please see the React component in `examples/react-example/App.js`. This example demonstrates how to set up a component for the `startFallingHearts` animation and includes important considerations for usage within React.

## Documentation

Read the [documentation here](https://abinesh-mathivanan.github.io/inlove-docs.io/#/).

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
