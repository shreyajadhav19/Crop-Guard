function detectDisease() {
  const diseases = [
    {
      disease: "Powdery Mildew",
      treatment: "Spray with sulfur fungicide and ensure airflow."
    },
    {
      disease: "Leaf Spot",
      treatment: "Apply neem oil and remove infected leaves."
    },
    {
      disease: "Rust",
      treatment: "Use chlorothalonil-based fungicide."
    },
    {
      disease: "Blight",
      treatment: "Use copper-based sprays and rotate crops."
    }
  ];
  return diseases[Math.floor(Math.random() * diseases.length)];
}

module.exports = { detectDisease };
