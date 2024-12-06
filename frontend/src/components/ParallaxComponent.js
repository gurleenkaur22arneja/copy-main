// src/components/ParallaxComponent.js
import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxComponent.css'; // Create this CSS file for styling

const ParallaxComponent = () => {
  return (
    <div>
      <Parallax
        bgImage="/path/to/your/image.jpg" // Replace with your image path
        strength={500} // Adjust the strength for the parallax effect
      >
        <div style={{ height: 500 }}>
          <h1>Parallax Effect</h1>
        </div>
      </Parallax>
      <div style={{ height: 500 }}>
        <h2>Other Content</h2>
      </div>
    </div>
  );
};

export default ParallaxComponent;
