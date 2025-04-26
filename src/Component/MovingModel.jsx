import React from 'react';
import Spline from '@splinetool/react-spline';

export default function StaticModel() {
 
  return (
    <div className="spline-wrapper" style={{ height: "400px", overflow: "hidden" }}>
      <Spline scene="https://prod.spline.design/6iL2v7sYDOikTpiQ/scene.splinecode"
           />
    </div>
  );
}
