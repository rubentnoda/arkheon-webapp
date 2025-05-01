import React, { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const enviarInstruccion = async () => {
    const res = await fetch("http://localhost:8000/instruccion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensaje }),
    });
    const data = await res.json();
    setRespuesta(data.respuesta);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ARKHÉON SUPREMUM</h1>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Escribí tu instrucción..."
        rows={4}
      />
      <button onClick={enviarInstruccion} className="bg-black text-white px-4 py-2 rounded">
        Ejecutar
      </button>
      <div className="mt-4 p-2 bg-gray-100 rounded">{respuesta}</div>
    </div>
  );
}

export default App;
