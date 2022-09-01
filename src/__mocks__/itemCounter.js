const itemCounter = (ori, arr) => {
  ori.splice(141).forEach((el) => {
    arr.push(el);
  });
  return arr.length
};

export default itemCounter;