"use client";

import MultiAssetChart from "src/components/ui/MultiAssetChart";


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  ShoppingCart,
  User,
  TrendingUp,
  Plus,
  ChevronRight,
  BarChart2,
  PieChart,
  DollarSign,
  Activity,
  Menu,
  X,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  BookOpen,
  Gift,
  HelpCircle,
  Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const notifications = 3;
  const router = useRouter();
  return (
    <motion.header
      {...fadeInUp}
      className="flex justify-between items-center p-4 bg-gray-900 text-white"
    >
      <div className="flex items-center space-x-8">
        <motion.span
          onClick={() => router.push("/")}
          className="text-2xl font-bold text-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          TradePro
        </motion.span>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-blue-500 font-semibold flex items-center"
              >
                <Zap className="mr-1" size={16} />
                Explore
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
              >
                <Globe className="mr-1" size={16} />
                Investments
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
              >
                <BookOpen className="mr-1" size={16} />
                Learn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="What are you looking for today?"
            className="pl-10 pr-4 py-2 bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bell className="text-gray-300 hover:text-blue-500 transition-colors" />
          {notifications > 0 && (
            <motion.span
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {notifications}
            </motion.span>
          )}
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ShoppingCart className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <User className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
        </motion.div>
      </div>
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 h-full w-64 bg-gray-800 p-4 z-50"
          >
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X />
            </motion.button>
            <nav className="mt-8">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-blue-500 font-semibold flex items-center"
                  >
                    <Zap className="mr-2" size={16} />
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <Globe className="mr-2" size={16} />
                    Investments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <BookOpen className="mr-2" size={16} />
                    Learn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <Gift className="mr-2" size={16} />
                    Rewards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <HelpCircle className="mr-2" size={16} />
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <Settings className="mr-2" size={16} />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Stocks");
  return (
    <motion.div {...fadeInUp} className="border-b border-gray-700">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 overflow-x-auto">
          {["Stocks", "Mutual Funds", "ETFs", "Options", "Futures"].map(
            (tab) => (
              <motion.li
                key={tab}
                className={`py-2 cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-300 hover:text-blue-500 transition-colors"
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.li>
            )
          )}
        </ul>
      </div>
    </motion.div>
  );
};

const generateRandomChange = (value: number) => {
  const change = (Math.random() * 2 - 1) * 100;
  const percentChange = (change / value) * 100;
  return { change, percentChange };
};

const MarketIndices = () => {
  const router = useRouter();
  const [marketData, setMarketData] = useState([
    { name: "NIFTY50", value: 18245.32, change: 0, percentChange: 0 },
    { name: "SENSEX", value: 61002.57, change: 0, percentChange: 0 },
    { name: "BANKNIFTY", value: 43123.45, change: 0, percentChange: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) =>
        prevData.map((index) => {
          const { change, percentChange } = generateRandomChange(index.value);
          const newValue = index.value + change;
          return { ...index, value: newValue, change, percentChange };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4"
    >
      {marketData.map((index) => (
        <motion.div
          key={index.name}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(`/dashboard/${index.name}`)}
        >
          <h3 className="font-semibold text-gray-300">{index.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-lg text-white">
              {index.value.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </span>
            <motion.span
              key={index.change}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm flex items-center ${
                index.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {index.change >= 0 ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}
              {index.change.toFixed(2)} ({index.percentChange.toFixed(2)}%)
            </motion.span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const StockCard = ({
  name,
  initialPrice,
}: {
  name: string;
  initialPrice: number;
}) => {
  const [price, setPrice] = useState(initialPrice);
  const [change, setChange] = useState(0);
  const [percentChange, setPercentChange] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const { change: randomChange, percentChange: randomPercentChange } =
        generateRandomChange(price);
      setPrice((prevPrice) => prevPrice + randomChange);
      setChange(randomChange);
      setPercentChange(randomPercentChange);
    }, 1000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push(`/dashboard/${name}`)}
    >
      <h3 className="font-semibold text-white mb-2">{name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-lg text-white">
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </span>
        <motion.span
          key={change}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm flex items-center ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change >= 0 ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}
          {change.toFixed(2)} ({percentChange.toFixed(2)}%)
        </motion.span>
      </div>
    </motion.div>
  );
};

const MostBought = () => (
  <motion.div {...fadeInUp} className="my-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-white">
        Most Bought on TradePro
      </h2>
      <motion.a
        href="#"
        className="text-blue-500 text-sm hover:underline flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View all
        <ChevronRight size={16} className="ml-1" />
      </motion.a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <StockCard name="Reliance" initialPrice={2345.6} />
      <StockCard name="Tata Motors" initialPrice={456.75} />
      <StockCard name="Suzlon Energy" initialPrice={18.45} />
      <StockCard name="Zomato" initialPrice={82.3} />
    </div>
  </motion.div>
);

const ProductsAndTools = () => {
  const products = [
    { name: "F&O", icon: BarChart2 },
    { name: "IPO", icon: DollarSign },
    { name: "ETFs", icon: PieChart },
    { name: "FDs", icon: TrendingUp },
    { name: "US Stocks", icon: Activity },
  ];

  return (
    <motion.div {...fadeInUp} className="my-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Products & tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.name}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#2D3748" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <product.icon className="text-white" />
            </motion.div>
            <span className="text-gray-300">{product.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TopGainers = () => (
  <motion.div {...fadeInUp} className="my-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-white">Top Gainers</h2>
      <motion.a
        href="#"
        className="text-blue-500 text-sm hover:underline flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See more
        <ChevronRight size={16} className="ml-1" />
      </motion.a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <StockCard name="TCS" initialPrice={845.6} />
      <StockCard name="HDFC" initialPrice={135.6} />
      <StockCard name="ICICI" initialPrice={345.6} />
      <StockCard name="Airtel" initialPrice={535.6} />
    </div>
  </motion.div>
);

const TopByMarketCap = () => {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const companies = [
    { name: "Reliance Industries", marketCap: 1523456.78 },
    { name: "TCS", marketCap: 1234567.89 },
    { name: "HDFC Bank", marketCap: 987654.32 },
    { name: "Infosys", marketCap: 7632.1 },
    { name: "ICICI Bank", marketCap: 5410.98 },
  ];

  return (
    <motion.div {...fadeInUp} className="py-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Top by Market Cap
      </h2>
      <div className="space-y-4">
        {companies.map((company) => (
          <motion.div
            key={company.name}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() =>
              setExpandedCompany(
                expandedCompany === company.name ? null : company.name
              )
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center">
              <span className="text-white">{company.name}</span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">
                  ₹{company.marketCap.toFixed(2)} Cr
                </span>
                <motion.div
                  animate={{
                    rotate: expandedCompany === company.name ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus className="text-blue-500" />
                </motion.div>
              </div>
            </div>
            <AnimatePresence>
              {expandedCompany === company.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-300"
                >
                  <p>Additional information about {company.name} goes here.</p>
                  <p>
                    You can add more details, charts, or any other relevant
                    data.
                  </p>
                  <motion.button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* ---------- STEP 1: Candle data generator ---------- */
const generateCandleData = () => {
  return Array.from({ length: 20 }, (_, i) => {
    const open = Math.random() * 100 + 100;
    const close = open + (Math.random() * 20 - 10);
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 10;

    return {
      time: `T${i}`,
      open,
      close,
      high,
      low,
    };
  });
};

/* ---------- STEP 2: Pattern logic ---------- */
const isDoji = (c: any) =>
  Math.abs(c.open - c.close) < (c.high - c.low) * 0.1;

const isHammer = (c: any) => {
  const body = Math.abs(c.open - c.close);
  const lowerWick = Math.min(c.open, c.close) - c.low;
  return lowerWick > body * 2;
};

const isEngulfing = (prev: any, curr: any) =>
  curr.open < prev.close && curr.close > prev.open;

const detectPattern = (data: any[], index: number) => {
  const c = data[index];
  const prev = data[index - 1];

  if (isDoji(c)) return "Doji";
  if (isHammer(c)) return "Hammer";
  if (prev && isEngulfing(prev, c)) return "Engulfing";
  return null;
};

const patternInfo: any = {
  Doji: "Market indecision",
  Hammer: "Possible bullish reversal",
  Engulfing: "Strong trend reversal signal",
};

/* ---------- COMPONENT ---------- */
const CandlePatternDisplay = () => {
  const [data, setData] = useState(generateCandleData());

  /* ---------- STEP 6: Real-time update ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateCandleData());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ---------- STEP 4: Visual labels ---------- */
  return (
    <motion.div {...fadeInUp} className="my-8">
      <h2 className="text-xl font-semibold text-white mb-4">Candlestick Pattern Recognition</h2>

      {data.map((c, i) => {
        const pattern = detectPattern(data, i);
        return (
          pattern && (
            <div key={i} className="bg-gray-800 p-3 rounded-lg mb-2 text-gray-300">
               {c.time} – {pattern}  
              <small>({patternInfo[pattern]})</small>
            </div>
          )
        );
      })}
    </motion.div>
  );
};
//task 6

//task 6
// 🔹 Random data
const generatePrices = () =>
  Array.from({ length: 20 }, (_, i) => ({
    time: `T${i}`,
    price: Math.random() * 100 + 100,
  }));

// 🔹 Moving Average
const movingAverage = (data:any[], period:number) =>
  data.map((_, i) =>
    i < period
      ? null
      : data.slice(i - period, i)
          .reduce((s, d) => s + d.price, 0) / period
  );

// 🔹 Volatility
const volatility = (data:any[]) => {
  const prices = data.map(d => d.price);
  const mean = prices.reduce((a,b)=>a+b,0)/prices.length;
  const variance =
    prices.reduce((s,p)=>s+(p-mean)**2,0)/prices.length;
  return Math.sqrt(variance);
};

// 🔹 RSI
const calculateRSI = (data:any[], period=14) => {
  let gains = 0, losses = 0;
  for (let i = data.length - period; i < data.length - 1; i++) {
    const diff = data[i+1].price - data[i].price;
    diff >= 0 ? gains += diff : losses -= diff;
  }
  const rs = gains / (losses || 1);
  return 100 - 100 / (1 + rs);
};


export default function EnhancedTradeProDashboard() {
  const generatePrices = () => {
    return Array.from({ length: 20 }, (_, i) => ({
      time: `T${i}`,
      price: Math.random() * 100 + 100,
    }));
  };

  const [prices, setPrices] = useState(generatePrices());
  const [trades, setTrades] = useState<any[]>([]);
const calculateMA = (data: any[], period: number) => {
  return data.map((_, i) => {
    if (i < period) return null;
    const slice = data.slice(i - period, i);
    return (
      slice.reduce((sum, s) => sum + s.price, 0) / period
    );
  });
};
const calculateRSI = (data: any[], period = 14) => {
  let gains = 0;
  let losses = 0;

  for (let i = data.length - period; i < data.length - 1; i++) {
    const diff = data[i + 1].price - data[i].price;
    if (diff >= 0) gains += diff;
    else losses -= diff;
  }

  const rs = gains / (losses || 1);
  return 100 - 100 / (1 + rs);
};
const runStrategy = (
  price: number,
  ma: number | null,
  rsi: number
) => {
  if (ma && price > ma) return "BUY";
  if (rsi > 70) return "SELL";
  return "HOLD";
};
// 🔹 STEP-5: TRADE SIMULATION FUNCTION
  const simulateTrade = (signal: string, price: number) => {
    if (signal === "BUY" || signal === "SELL") {
      setTrades((prev) => [...prev, { signal, price }]);
    }
  };

  // 🔹 STEP-6: REAL-TIME STRATEGY RUN
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generatePrices();
      setPrices(newData);

      const ma = calculateMA(newData, 10).slice(-1)[0];
      const rsi = calculateRSI(newData);

      const latestPrice = newData[newData.length - 1].price;
      const signal = runStrategy(latestPrice, ma, rsi);

      simulateTrade(signal, latestPrice);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

   // 🔹 Task-6 states
  const [data, setData] = useState(generatePrices());
  const [showMA, setShowMA] = useState(true);
  const [showRSI, setShowRSI] = useState(true);
  const [showVol, setShowVol] = useState(true);

  // 🔹 Real-time update
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generatePrices());
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <Header />
      <main className="container mx-auto px-4">
        <TabSection />
    <MarketIndices />
    <MostBought />
    <ProductsAndTools />
    <TopGainers />
    <MultiAssetChart />
    <TopByMarketCap />
    <CandlePatternDisplay />
      </main>
    </div>
  );
}
