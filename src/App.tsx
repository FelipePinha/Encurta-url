import './styles/app.css';

function App() {
    return (
        <div className="center">
            <main>
                <h1>Gerador de links curtos</h1>
                <p>Insira a url que você deseja encurtar no campo abaixo</p>
                <form>
                    <input type="text" placeholder="coloque sua url aqui!" />
                    <button type="submit">Gerar Link</button>
                </form>
            </main>
        </div>
    );
}

export default App;
