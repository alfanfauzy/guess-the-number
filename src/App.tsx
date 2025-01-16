import { ChangeEvent, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [startNumber, setStartNumber] = useState(1);
    const [endNumber, setEndNumber] = useState(100);
    const [valueInput, setValueInput] = useState<number>(0);

    const [isTrue, setIsTrue] = useState(false);
    const yourNumber = useMemo(() => Math.floor(Math.random() * 100) + 1, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(Number(event.target.value));
    };

    const handleCheckNumber = () => {
        if (valueInput === yourNumber) {
            setIsTrue(true);
        }

        if (valueInput > endNumber || valueInput < startNumber) {
            return;
        }

        if (valueInput < yourNumber) setStartNumber(valueInput);

        if (valueInput > yourNumber) setEndNumber(valueInput);
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Your Number {yourNumber}</h1>
            {isTrue && <p>Bener</p>}
            <p>
                Pilih number dari {startNumber} sampai {endNumber}
            </p>
            <div className="card">
                <input type="text" value={valueInput} onChange={handleChange} />
                <button onClick={handleCheckNumber}>count</button>
                <button onClick={() => location.reload()}>reload</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
