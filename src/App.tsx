import { ChangeEvent, FormEvent, useState } from 'react';
import './styles/app.css';
// import axios from 'axios';
// key=[API_KEY]&short=$url

function App() {
    const [link, setLink] = useState<string>('');

    const handleChangeLink = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    };

    const handleShortLink = async (e: FormEvent) => {
        e.preventDefault();

        if (!link) return;

        if (link.includes('https://') || link.includes('http://')) {
            await fetch('https://api-ssl.bitly.com/v4/shorten', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    domain: 'bit.ly',
                    long_url: link,
                }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }
    };

    return (
        <div className="center">
            <main>
                <h1>Gerador de links curtos</h1>
                <p>Insira a url que você deseja encurtar no campo abaixo</p>
                <form onSubmit={handleShortLink}>
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
