export default function handler(req, res) {
  res.status(200).json({
    dailyData: Array.from({ length: 30 }, (_, i) => ({
      close: 30000 + Math.sin(i) * 1000,
    })),
  });
}
