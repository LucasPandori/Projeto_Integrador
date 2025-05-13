import app from "./app.js";

const PORT = process.env.PORTA || 3000;

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
})