import { ChangeEvent, useState } from 'react';
import './styles/app.css';

function App() {
    const [link, setLink] = useState<string>('');

    const handleChangeLink = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    };

    return (
        <div className="center">
            <main>
                <h1>Gerador de links curtos</h1>
                <p>Insira a url que você deseja encurtar no campo abaixo</p>
                <form>
                    <input
                        onChange={handleChangeLink}
                        value={link}
                        type="text"
                        placeholder="coloque sua url aqui!"
                    />
                    <button className={link ? 'active' : ''} type="submit">
                        Gerar Link
                    </button>
                </form>
            </main>
        </div>
    );
}

export default App;
