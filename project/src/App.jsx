import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div>
        <h2 className="text-3xl text-indigo-300">Hello! GSAP</h2>
      </div>
    </>
  );
}

export default App;
