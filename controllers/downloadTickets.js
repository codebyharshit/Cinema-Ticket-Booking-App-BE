const uuid = require("uuid");

const downloadTickets = async (req, res) => {
  const { movie, ticket, date, show } = req.query;
  try {
    if (!movie && !ticket && !date && !show) {
      res.send("All inputs required");
    }

    const result = {
      ID: uuid.v4(),
      Movie: movie,
      Tickets: ticket,
      "Show Date": date,
      "Show Time": show,
    };

    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = downloadTickets;
