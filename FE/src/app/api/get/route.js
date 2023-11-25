export async function GET(req, res) {
  try {
    // Fetch data from the external API (127.0.0.1:8000 in this case)
    const response = await fetch("http://127.0.0.1:8000");
    const data = await response.json();

    // Return the data as JSON
    console.log(data.data);
    return Response.json(data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
