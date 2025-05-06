import { ChangeEvent, useMemo, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import ReactConfetti from "react-confetti";

function App() {
    const [startNumber, setStartNumber] = useState<number>(1);
    const [endNumber, setEndNumber] = useState<number>(100);
    const [valueInput, setValueInput] = useState<number>(0);
    const [countWrong, setCountWrong] = useState<number>(0);

    const [isTrue, setIsTrue] = useState(false);
    const yourNumber = useMemo(() => Math.floor(Math.random() * 100) + 1, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(Number(event.target.value));
    };

    const handleCheckNumber = () => {
        if (valueInput !== yourNumber) {
            setCountWrong(countWrong + 1);
        }

        if (valueInput === yourNumber) {
            setIsTrue(true);
            setStartNumber(1);
            setEndNumber(100);
            setValueInput(0);
        }

        if (valueInput > endNumber || valueInput < startNumber) {
            return;
        }

        if (valueInput < yourNumber) setStartNumber(valueInput);

        if (valueInput > yourNumber) setEndNumber(valueInput);
    };

    return (
        <div className="mx-auto w-96 h-52 border-double border-4 border-[#A6CDC6] rounded-xl p-4">
            <p className="text-black">
                {isTrue ? (
                    <>
                        <p>Hore Selamat Jawaban Anda Benar</p>
                        <p>{yourNumber}</p>
                    </>
                ) : (
                    `Pilih number dari ${startNumber} sampai ${endNumber}`
                )}
            </p>
            <div className="flex flex-col gap-2">
                <Input
                    className="text-black"
                    type="text"
                    value={valueInput}
                    onChange={handleChange}
                />

                <div className="flex flex-row gap-2 justify-center">
                    <Button onClick={handleCheckNumber}>Submit</Button>
                    <Button onClick={() => location.reload()}>Reload</Button>
                </div>
            </div>
            {isTrue && (
                <div className="mx-auto">
                    <ReactConfetti />
                </div>
            )}
        </div>
    );
}

export default App;
