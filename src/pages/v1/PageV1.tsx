import { useState } from 'react';

const PageV1 = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [numberOfCoincidences, setNumberOfCoincidences] = useState(0);

    const handleChange1 = (event: any) => {
        setText1(event.target.value);
    };

    const handleChange2 = (event: any) => {
        setText2(event.target.value);
    };

    const numsArr1 = Array.from(String(text1), Number);
    const numsArr2 = Array.from(String(text2), Number);

    const showBtnHandler = () => {
        setNumberOfCoincidences(0);

        if (numsArr1[0] === numsArr2[0] && numsArr1[0] === 1) {
            console.log('Coincidence in position 1!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[1] === numsArr2[1] && numsArr1[1] === 1) {
            console.log('Coincidence in position 2!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[2] === numsArr2[2] && numsArr1[2] === 1) {
            console.log('Coincidence in position 3!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[3] === numsArr2[3] && numsArr1[3] === 1) {
            console.log('Coincidence in position 4!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[4] === numsArr2[4] && numsArr1[4] === 1) {
            console.log('Coincidence in position 5!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[5] === numsArr2[5] && numsArr1[5] === 1) {
            console.log('Coincidence in position 6!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[6] === numsArr2[6] && numsArr1[6] === 1) {
            console.log('Coincidence in position 7!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[7] === numsArr2[7] && numsArr1[7] === 1) {
            console.log('Coincidence in position 8!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[8] === numsArr2[8] && numsArr1[8] === 1) {
            console.log('Coincidence in position 9!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[9] === numsArr2[9] && numsArr1[9] === 1) {
            console.log('Coincidence in position 10!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[10] === numsArr2[10] && numsArr1[10] === 1) {
            console.log('Coincidence in position 11!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[11] === numsArr2[11] && numsArr1[11] === 1) {
            console.log('Coincidence in position 12!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[12] === numsArr2[12] && numsArr1[12] === 1) {
            console.log('Coincidence in position 13!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[13] === numsArr2[13] && numsArr1[13] === 1) {
            console.log('Coincidence in position 14!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }

        if (numsArr1[14] === numsArr2[14] && numsArr1[14] === 1) {
            console.log('Coincidence in position 15!');
            setNumberOfCoincidences((prevNumber) => prevNumber + 1);
        }
    };

    const isEven = numberOfCoincidences % 2 === 0;

    const isEvenText = isEven ? 'number is even' : 'number is odd';

    const resultText = isEven ? '0' : '1';

    return (
        <div className="page-v1-wrapper">
            <p>Input for text 1</p>
            <textarea className="textfield-first" id="text1" name="text1" value={text1} onChange={handleChange1} />
            <p>Input for text 2</p>
            <textarea className="textfield-second" id="text2" name="text2" value={text2} onChange={handleChange2} />
            <p>
                Number of coincidences: {numberOfCoincidences}; {isEvenText}
            </p>
            <button onClick={showBtnHandler}>Show similar 1</button>
            <p>Result: {resultText}</p>
        </div>
    );
};

export default PageV1;
