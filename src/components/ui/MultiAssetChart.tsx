"use client";

const generateData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    time: `T${i}`,
    stock: Math.random() * 100 + 100,
    crypto: Math.random() * 200 + 200,
    bond: Math.random() * 50 + 50,
  }));
};
