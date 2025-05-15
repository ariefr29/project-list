const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('dashboard'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

// Ambil data project
app.get('/api/projects', (req, res) => {
  const filePath = path.join(__dirname, 'assets/project.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  res.json(JSON.parse(data));
});

// Simpan data project (overwrite file)
app.post('/api/projects', (req, res) => {
  const filePath = path.join(__dirname, 'assets/project.json');
  const newData = JSON.stringify(req.body, null, 2);
  fs.writeFileSync(filePath, newData, 'utf-8');
  res.json({ message: 'Saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
