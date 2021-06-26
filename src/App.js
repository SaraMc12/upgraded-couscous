import React, { useState, createRef } from "react";
import Bubble from "../src/components/Bubble";
import AnimateBubbles from "./components/AnimateBubbles";
import initialImages from "./components/initialImages";
import shuffleArray from "./helpers/shuffleArray";
import "./style.css";

export default function App() {
  const [images, setImages] = useState(initialImages);

  const reorder = () => {
    const shuffledImages = shuffleArray(images);
    setImages(shuffledImages);
  };

  return (
    <div>
      <div className="bubbles-wrapper">
        <div className="bubbles-group">
          <AnimateBubbles>
            {images.map(({ id, text }) => (
              <Bubble key={id} id={id} text={text} ref={createRef()} />
            ))}
          </AnimateBubbles>
        </div>
      </div>

      <div className="button-wrapper">
        <button className="button" onClick={reorder}>
          Re-order images
        </button>
      </div>
    </div>
  );
}
