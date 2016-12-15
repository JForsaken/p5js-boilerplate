export default class Bouncer {
  constructor(m, x, y, p) {
    this.p = p;
    this.p = p;
    this.mass = m;
    this.position = p.createVector(x, y);
    this.velocity = p.createVector(0, 0);
    this.acceleration = p.createVector(0, 0);
  }

  // Newton's 2nd law: F = M * A
  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    const { p, mass, velocity, position, acceleration } = this;
    const gravityMultiplier = 0.2;

    // Gravity is scaled by mass
    const gravity = p.createVector(0, gravityMultiplier * mass);
    // Apply gravity
    this.applyForce(gravity);

    // Velocity changes according to acceleration
    velocity.add(acceleration);
    // position changes by velocity
    position.add(velocity);
    // We must clear acceleration each frame
    acceleration.mult(0);
  }

  display() {
    const { p, position, mass } = this;

    p.stroke(0);
    p.strokeWeight(2);
    p.fill(255, 127);
    p.ellipse(position.x, position.y, mass * 16, mass * 16);
  }

  // Bounce off bottom of window
  checkEdges() {
    const { mass, position, velocity, p } = this;
    const bounceBack = -0.8;

    if (position.y > (p.height - (mass * 8))) {
      // A little dampening when hitting the bottom
      velocity.y *= bounceBack;
      position.y = (p.height - (mass * 8));
    }
  }
}
