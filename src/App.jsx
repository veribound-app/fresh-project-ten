import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const getRisk = (e, m) => {
    const emailLow = e.toLowerCase().trim();
    const msgLow = (m + " " + e).toLowerCase();
    const isEmpty = !emailLow && !m.trim();

    if (isEmpty) {
      return { score: "--", label: "⬛ EMPTY - Enter Email & Message", color: "#1f1f1f", border: "2px dashed #555", icon: "⬛" };
    }
    if (!emailLow) {
      return { score: "--", label: "⬛ EMPTY - Email Required", color: "#1f1f1f", border: "2px dashed #555", icon: "⬛" };
    }
    if (emailLow.includes("wagalijian") || emailLow.includes("wangalijian") || emailLow.includes("wolfers") || emailLow.includes("salih") || emailLow.includes("diplomat") || emailLow.includes("emailn.eu")) {
      return { score: 0, label: "🟥 BLOCKED - Known Diplomat Scammer", color: "#ff1a1a", border: "none", icon: "🟥" };
    }
    if (msgLow.includes("trunk") || msgLow.includes("consignment") || msgLow.includes("passport") || msgLow.includes("ambassador") || msgLow.includes("saint-luc")) {
      return { score: 0, label: "🟥 BLOCKED - Trunk / Passport Scam", color: "#ff1a1a", border: "none", icon: "🟥" };
    }
    return { score: 85, label: "🟩 TRUSTED - Allow User", color: "#00c853", border: "none", icon: "🟩" };
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "white", padding: 20, fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>VeriBound - Risk Check</h2>
      <div style={{ maxWidth: 600, margin: "20px auto", background: "#1a1a23", padding: 20, borderRadius: 12 }}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"
          style={{ width: "100%", padding: 14, borderRadius: 8, background: "#000", color: "#fff", border: "1px solid #444", fontSize: 16 }} />
        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Paste message here"
          style={{ width: "100%", marginTop: 12, padding: 14, borderRadius: 8, background: "#000", color: "#fff", minHeight: 120, border: "1px solid #444", fontSize: 16 }} />
        <button onClick={()=>setResult(getRisk(email,message))} style={{ marginTop: 14, width: "100%", padding: 14, borderRadius: 8, background: "#fff", color: "#000", fontWeight: "bold", fontSize: 16, cursor: "pointer" }}>Check</button>
        
        {result && (
          <div style={{ marginTop: 20, padding: 18, borderRadius: 12, background: result.color, border: result.border, color: result.color==="#1f1f1f"?"#aaa":"white", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", opacity: 0.9 }}>
              <span>Risk Score</span><span>{result.score} / 100</span>
            </div>
            <div style={{ marginTop: 12, fontWeight: 900, fontSize: 18 }}>{result.label}</div>
          </div>
        )}
        {!result && (
          <div style={{ marginTop: 20, padding: 18, borderRadius: 12, background: "#111", border: "1px dashed #333", color: "#666", textAlign: "center" }}>
            ⬛ Waiting for input...
          </div>
        )}
      </div>
    </div>
  );
}