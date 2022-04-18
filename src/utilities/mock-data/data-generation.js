import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newData = (d) => {
  return {
    id: d,
    investment: namor.generate({ words: 1, numbers: 0 }),
    commitmentdate: namor.generate({ words: 1, numbers: 1 }),
    marketvalue: Math.floor(Math.random() * 10000)
  };
};

export function generateData(len = 100) {
  return range(len).map(d => {
    return {
      ...newData(d)
    }
  });
}