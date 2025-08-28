// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const response = await fetch(
//       "https://lassa-fever-surveillance-model.onrender.com/predict",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(req.body),
//       }
//     );

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error:", error);

//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }
