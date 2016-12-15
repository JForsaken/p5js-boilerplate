import { forEach } from 'ramda';
import Bouncer from './bouncer';

const P5 = p5;

// sketch starting point must be a function
const sketch = (p5) => {
  const p = p5;
  const bouncers = [];

  // Creates random bouncers
  function createBouncers() {
    const qty = 9;
    const minMass = 0.2;
    const maxMass = 4.5;

    for (let i = 0; i < qty; i += 1) {
      bouncers[i] = new Bouncer(p.random(minMass, maxMass), 40 + (i * 70), 0, p);
    }
  }

  // moves ands displays each bouncer
  function animateBouncers() {
    forEach((b) => {
      b.update();
      b.display();
      b.checkEdges();
    }, bouncers);
  }

  // runs once to set up the canvas
  p.setup = () => {
    p.createCanvas(640, 360);
    createBouncers();
    p.rectMode(p.CENTER); // the first two arguments of a rect are now its center point, not corner
  };

  // runs at every frame
  p.draw = () => {
    p.background(50);
    animateBouncers();
  };
};

// runs the sketch
new P5(sketch);  // 2nd param can be a canvas html element
