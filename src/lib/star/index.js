const starEffect = (canvas) => {
  const context = canvas.getContext('2d');
  const config = {
    star: {
      color: '#fff',
    },
    line: {
      color: '#fff',
      width: 0.1,
    },
    position: {
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
    },
    velocity: 0.1,
    length: 100,
    distance: 120,
    radius: 150,
    stars: [],
  };

  function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = config.velocity - Math.random() * 0.5;
    this.vy = config.velocity - Math.random() * 0.5;
    this.radius = Math.random();
  }
  Star.prototype = {
    create() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
    },
    animate() {
      let i;
      for (i = 0; i < config.length; i++) {
        const star = config.stars[i];
        if (star.y < 0 || star.y > canvas.height) {
          // eslint-disable-next-line no-self-assign
          star.vx = star.vx;
          star.vy = -star.vy;
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = -star.vx;
          // eslint-disable-next-line no-self-assign
          star.vy = star.vy;
        }
        star.x += star.vx;
        star.y += star.vy;
      }
    },
    line() {
      const { length } = config;
      let iStar;
      let jStar;
      let i;
      let j;
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          iStar = config.stars[i];
          jStar = config.stars[j];
          if (
            iStar.x - jStar.x < config.distance &&
            iStar.y - jStar.y < config.distance &&
            iStar.x - jStar.x > -config.distance &&
            iStar.y - jStar.y > -config.distance
          ) {
            if (
              iStar.x - config.position.x < config.radius &&
              iStar.y - config.position.y < config.radius &&
              iStar.x - config.position.x > -config.radius &&
              iStar.y - config.position.y > -config.radius
            ) {
              context.beginPath();
              context.moveTo(iStar.x, iStar.y);
              context.lineTo(jStar.x, jStar.y);
              context.stroke();
              context.closePath();
            }
          }
        }
      }
    },
  };
  const createStars = function () {
    const { length } = config;
    let star;
    let i;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < length; i++) {
      config.stars.push(new Star());
      star = config.stars[i];
      star.create();
    }
    star.line();
    star.animate();
  };
  const setCanvas = function () {
    // eslint-disable-next-line no-param-reassign
    canvas.width = window.innerWidth;
    // eslint-disable-next-line no-param-reassign
    canvas.height = window.innerHeight;
  };
  const setContext = function () {
    context.fillStyle = config.star.color;
    context.strokeStyle = config.line.color;
    context.lineWidth = config.line.width;
  };
  const loop = function (callback) {
    callback();
    reqAnimFrame(function () {
      loop(function () {
        callback();
      });
    });
  };
  const bind = function () {
    window.onmousemove = function (e) {
      config.position.x = e.pageX;
      config.position.y = e.pageY;
    };
  };
  const init = function () {
    setCanvas();
    setContext();
    loop(function () {
      createStars();
    });
    bind();
  };
  return init();
};
const reqAnimFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
export default starEffect;
