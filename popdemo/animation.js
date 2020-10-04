const popmotion = require("popmotion");
require("useless");

// code taken from one of the examples on popmotion.io
const { styler, spring, listen, pointer, value } = popmotion;
// the above syntax is instead of writing out each variable - I know there's something in popmotion called spring, so let's call it spring
const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });