export default function handler(req, res) {
  res.status(200).json({
    currentPrice: 31000,
    exchangeData: {
      totalVolume24h: 150000000,
      highestPrice24h: 31500,
      lowestPrice24h: 29500,
    },
    technicalIndicators: {
      sma7: 30500,
      sma30: 29800,
      rsi: 55.2,
      volatility: 0.08,
    },
    analysis: {
      trend: "tích_cực",
      confidenceLevel: 85,
      marketAnalysis: "Thị trường đang có xu hướng phục hồi.",
      recommendation: "mua",
    },
    predictions: {
      time1m: { price: 30990 },
      time15m: { price: 31100 },
      time30m: { price: 31200 },
      time4h: { price: 31800 },
      time24h: { price: 32500 },
    },
    lastUpdated: new Date().toISOString(),
  });
}
