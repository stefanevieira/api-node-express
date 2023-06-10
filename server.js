import app from './src/app.js'

const port = process.env.PORT || 3000; // diferencia a porta amb produção ou fixa

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

// so inicia o servidor e escuta requisição