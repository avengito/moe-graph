export default async function handler(req, res) {
  const response = await fetch("https://moe-map.com/api/servers.php");
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.status(200).json(data);
}
