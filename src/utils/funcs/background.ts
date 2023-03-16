const bg = () => {
  let [a, b, c] = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  return `rgba(${a}, ${b}, ${c}, 0.6}`;
};

export default bg;
