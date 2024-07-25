// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  const { endpoint } = req.query;

  try {
    const response = await axios.get(endpoint, 
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
