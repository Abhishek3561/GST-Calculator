import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("18");
  const [mode, setMode] = useState("add");

  const [baseAmount, setBaseAmount] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gst);

    if (isNaN(amt) || amt <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (mode === "add") {
      const gstValue = (amt * rate) / 100;
      const total = amt + gstValue;

      setBaseAmount(amt);
      setGstAmount(gstValue);
      setTotalAmount(total);
    } else {
      const originalAmount = amt / (1 + rate / 100);
      const gstValue = amt - originalAmount;

      setBaseAmount(originalAmount);
      setGstAmount(gstValue);
      setTotalAmount(amt);
    }
  };

  const resetCalculator = () => {
    setAmount("");
    setGst("18");
    setBaseAmount(0);
    setGstAmount(0);
    setTotalAmount(0);
  };

  return (
    <div className="app">
      <div className="card">
        <div className="header">
          <h1>GST Calculator</h1>
          <p>Add or remove GST instantly with accurate calculations.</p>
        </div>

        <div className="mode-switch">
          <button
            className={mode === "add" ? "active" : ""}
            onClick={() => setMode("add")}
          >
            Add GST
          </button>

          <button
            className={mode === "remove" ? "active" : ""}
            onClick={() => setMode("remove")}
          >
            Remove GST
          </button>
        </div>

        <div className="input-box">
          <label>Amount (₹)</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>GST Rate (%)</label>
          <select value={gst} onChange={(e) => setGst(e.target.value)}>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>

        <div className="action-buttons">
          <button className="calculate-btn" onClick={calculateGST}>
            Calculate
          </button>

          <button className="reset-btn" onClick={resetCalculator}>
            Reset
          </button>
        </div>

        <div className="results">
          <div className="result-card">
            <h3>Base Amount</h3>
            <p>₹ {baseAmount.toFixed(2)}</p>
          </div>

          <div className="result-card">
            <h3>GST Amount</h3>
            <p>₹ {gstAmount.toFixed(2)}</p>
          </div>

          <div className="result-card total">
            <h3>Total Amount</h3>
            <p>₹ {totalAmount.toFixed(2)}</p>
          </div>
        </div>

        <div className="footer">
          <h3>Developer</h3>

          <p>
            <strong>Abhishek Tyagi</strong>
          </p>

          <p>tyagiabhishek677@gmail.com</p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="digital-btn"
          >
            Built for Digital Heroes
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
