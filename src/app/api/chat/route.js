export async function POST(req, res) {
  try {
    const { input } = await req.json();
    const d = {
        "model": "gpt-3.5-turbo-16k",
        "messages": [
          {
            "role": "system",
            "content": `${input}`
          },
          {
            "role": "user",
            "content": `${input}`
          }
        ]
      };
    // Fetch data from the external API (127.0.0.1:8000 in this case)
    const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
        body: JSON.stringify(d),
      }
    );
    const data = await response.json();

    // Return the data as JSON
    return Response.json(data.choices[0].message.content);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}
