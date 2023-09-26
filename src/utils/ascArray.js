export const ascArray = (array) => {
  const newArray = new Array(array.length);

  array.forEach((item) => {
    newArray[item.index - 1] = item;
  });

  return newArray;
};
