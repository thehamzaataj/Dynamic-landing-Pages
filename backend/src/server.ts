import app from './app'

const PORT: number = 5000;

app.listen(PORT,()=>{
    console.log(`Server is Listening on http://localhost:${PORT}`)
})