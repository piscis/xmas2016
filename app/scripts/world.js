const world = {
  lightSide: {
    objects: [
      {
        type: 'three',
        reactive: true,
        factor: 0.0001,
        ao: false,
        shininess: 3000,
        p: {
          x: -40,
          y: 24,
          z: 10,
        },
        scale: 0.08,
      },
      {
        type: 'renne',
        reactive: true,
        factor: 0.01,
        ao: false,
        shininess: 3000,
        p: {
          x: -22,
          y: 15,
          z: -46,
        },
        r: {
          x: 0,
          y: -20,
          z: 0,
        },
        scale: 10,
      },
      {
        type: 'present',
        reactive: true,
        factor: 0.0002,
        ao: false,
        shininess: 3000,
        p: {
          x: -31,
          y: 10,
          z: 10,
        },
        scale: 0.08,
      },
      {
        type: 'present',
        reactive: true,
        factor: 0.0001,
        ao: false,
        shininess: 3000,
        p: {
          x: -40,
          y: 10,
          z: -3,
        },
        scale: 0.09,
      },
      {
        type: 'present',
        reactive: true,
        factor: 0.0002,
        ao: false,
        shininess: 3000,
        p: {
          x: -53,
          y: 10,
          z: -3,
        },
        r: {
          x: 0,
          y: 50,
          z: 0,
        },
        scale: 0.12,
      },
      {
        type: 'candy',
        reactive: true,
        factor: 0.03,
        ao: false,
        shininess: 3000,
        p: {
          x: -55,
          y: 15,
          z: -41,
        },
        r: {
          x: 8,
          y: 50,
          z: 0,
        },
        scale: 10,
      },
      {
        type: 'candy',
        reactive: true,
        factor: 0.03,
        ao: false,
        shininess: 3000,
        p: {
          x: -40,
          y: 15,
          z: 38,
        },
        r: {
          x: 10,
          y: 180,
          z: 0,
        },
        scale: 15,
      },
      {
        type: 'candy',
        reactive: true,
        factor: 0.03,
        ao: false,
        shininess: 3000,
        p: {
          x: 40,
          y: 61,
          z: -3,
        },
        r: {
          x: -10,
          y: 120,
          z: 0,
        },
        scale: 20,
      },
      {
        type: 'snowman-head',
        reactive: true,
        factor: 0.0001,
        ao: false,
        shininess: 3000,
        p: {
          x: 15,
          y: 50,
          z: 15,
        },
        r: {
          x: 0,
          y: 50,
          z: 0,
        },
        scale: 0.4,
      },
      {
        type: 'snowman-body',
        reactive: true,
        factor: 0.0002,
        ao: false,
        shininess: 3000,
        p: {
          x: 15,
          y: 33,
          z: 15,
        },
        r: {
          x: 0,
          y: 50,
          z: 0,
        },
        scale: 0.4,
      },
    ],
  },
  darkSide: {
    objects: [
      {
        type: 'skull',
        reactive: true,
        factor: 0.004,
        ao: false,
        shininess: 3000,
        p: {
          x: -13,
          y: -22,
          z: 15,
        },
        r: {
          x: 0,
          y: -60,
          z: 0,
        },
        follow:true,
        scale: -0.8,
        open: true,
      },
      {
        type: 'skull-head-top',
        reactive: true,
        factor: 0.004,
        ao: false,
        shininess: 3000,
        p: {
          x: -13,
          y: -55,
          z: 15,
        },
        r: {
          x: 0,
          y: -60,
          z: 0,
        },
        follow:true,
        scale: -0.1,
        open: true,
      },
      {
        type: 'skull-head-bottom',
        reactive: true,
        factor: 0.004,
        ao: false,
        shininess: 3000,
        p: {
          x: -13,
          y: -49,
          z: 15,
        },
        r: {
          x: 0,
          y: -60,
          z: 0,
        },
        scale: -0.1,
        follow:true,
        open: true,
      },
      {
        type: 'dead-three',
        reactive: true,
        factor: 0.004,
        ao: false,
        shininess: 3000,
        p: {
          x: 40,
          y: -24,
          z: 10,
        },
        scale: -2.5,
        open: true,
      },
    ],
  },
};
export default world;
