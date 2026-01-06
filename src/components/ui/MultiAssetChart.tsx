"use client";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend
} from "recharts";
import { useState, useEffect } from "react";



const generateData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    time: `T${i}`,
    stock: Math.random() * 100 + 100,
    crypto: Math.random() * 200 + 200,
    bond: Math.random() * 50 + 50,
  }));
};

export default function MultiAssetChart() {
  const [data, setData] = useState(generateData());
  const [showStock, setShowStock] = useState(true);
  const [showCrypto, setShowCrypto] = useState(true);
  const [showBond, setShowBond] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />

        {showStock && <Line dataKey="stock" stroke="#8884d8" />}
        {showCrypto && <Line dataKey="crypto" stroke="#82ca9d" />}
        {showBond && <Line dataKey="bond" stroke="#ffc658" />}
      </LineChart>

      <div >
        <button onClick={() => setShowStock(!showStock)}> Stock</button>
        <button onClick={() => setShowCrypto(!showCrypto)}> Crypto</button>
        <button onClick={() => setShowBond(!showBond)}> Bond</button>
      </div>
    </>
  );
}
