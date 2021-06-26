import React, { forwardRef } from "react";

const teamImages = ["./bebe.png"];

const Bubble = forwardRef(({ text, id }, ref) => (
  <div ref={ref}>
    <div className="circle">
      <span
        className="image"
        style={{
          backgroundImage: `url('${teamImages}?random=${id}')`,
        }}
      />
    </div>
    <p className="text">{text}</p>
  </div>
));

export default Bubble;
