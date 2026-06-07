import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// makes sure both plugins are imported and can be used globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>
    </div>
  );
};

export default App;
