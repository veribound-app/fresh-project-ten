import { useState } from "react";
import  DisputeTable from "./components/DisputeTable";
import { isHighRisk } from "./lib/riskEngine";

function App() {
  const [email] = useState("test@example.com");
  const [amount] = useState(500);

  const highRisk = isHighRisk(email, amount);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Veribound App</h1>
      {highRisk && <p style={{ color: "red" }}>High Risk Detected!</p>}
      <DisputeTable />
    </div>
  );
}

export default App