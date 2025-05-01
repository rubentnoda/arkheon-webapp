from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from arkheon_engine import procesar_instruccion

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/instruccion")
async def recibir_instruccion(request: Request):
    data = await request.json()
    mensaje = data.get("mensaje", "")
    respuesta = procesar_instruccion(mensaje)
    return {"respuesta": respuesta}
