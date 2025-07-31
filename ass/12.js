// Function to simulate data fetching with 50% success rate
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve("Data fetched successfully");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

// Async function to handle the data fetching
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
    console.log(result);
  } catch (error) {
    console.log("Error fetching data");
    console.log(error.message);
  }
}

// Execute the handler
fetchDataHandler();

module.exports = { fetchData, fetchDataHandler };