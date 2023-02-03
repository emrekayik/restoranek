import urunler from '@/pages/api/urunler.json'

export default function handler(req, res) {
  res.status(200).json(urunler)
}
