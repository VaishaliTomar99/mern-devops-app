const express = require('express');
const app = express();

// ✅ FIX: Use environment variable
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
