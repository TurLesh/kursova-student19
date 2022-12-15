import { useState } from 'react';

const Decode = () => {
    //states for rows
    const [row1, setRow1] = useState<number[]>();
    const [row2, setRow2] = useState<number[]>();
    const [row3, setRow3] = useState<number[]>();
    const [row4, setRow4] = useState<number[]>();
    const [row5, setRow5] = useState<number[]>();
    const [row6, setRow6] = useState<number[]>();
    const [row7, setRow7] = useState<number[]>();
    const [row8, setRow8] = useState<number[]>();
    const [row9, setRow9] = useState<number[]>();
    const [row10, setRow10] = useState<number[]>();
    const [row11, setRow11] = useState<number[]>();
    const [row12, setRow12] = useState<number[]>();
    const [row13, setRow13] = useState<number[]>();

    const getMatrixRowsData = () => {
        const noiseGetRow1Str = localStorage.getItem('noiseRow1');
        const noiseGetRow2Str = localStorage.getItem('noiseRow2');
        const noiseGetRow3Str = localStorage.getItem('noiseRow3');
        const noiseGetRow4Str = localStorage.getItem('noiseRow4');
        const noiseGetRow5Str = localStorage.getItem('noiseRow5');
        const noiseGetRow6Str = localStorage.getItem('noiseRow6');
        const noiseGetRow7Str = localStorage.getItem('noiseRow7');
        const noiseGetRow8Str = localStorage.getItem('noiseRow8');
        const noiseGetRow9Str = localStorage.getItem('noiseRow9');
        const noiseGetRow10Str = localStorage.getItem('noiseRow10');
        const noiseGetRow11Str = localStorage.getItem('noiseRow11');
        const noiseGetRow12Str = localStorage.getItem('noiseRow12');
        const noiseGetRow13Str = localStorage.getItem('noiseRow13');

        if (
            noiseGetRow1Str &&
            noiseGetRow2Str &&
            noiseGetRow3Str &&
            noiseGetRow4Str &&
            noiseGetRow5Str &&
            noiseGetRow6Str &&
            noiseGetRow7Str &&
            noiseGetRow8Str &&
            noiseGetRow9Str &&
            noiseGetRow10Str &&
            noiseGetRow11Str &&
            noiseGetRow12Str &&
            noiseGetRow13Str
        ) {
            const matrixResultRow1 = Array.from(noiseGetRow1Str.replaceAll(',', ''), Number);
            setRow1(matrixResultRow1);

            const matrixResultRow2 = Array.from(noiseGetRow2Str.replaceAll(',', ''), Number);
            setRow2(matrixResultRow2);

            const matrixResultRow3 = Array.from(noiseGetRow3Str.replaceAll(',', ''), Number);
            setRow3(matrixResultRow3);

            const matrixResultRow4 = Array.from(noiseGetRow4Str.replaceAll(',', ''), Number);
            setRow4(matrixResultRow4);

            const matrixResultRow5 = Array.from(noiseGetRow5Str.replaceAll(',', ''), Number);
            setRow5(matrixResultRow5);

            const matrixResultRow6 = Array.from(noiseGetRow6Str.replaceAll(',', ''), Number);
            setRow6(matrixResultRow6);

            const matrixResultRow7 = Array.from(noiseGetRow7Str.replaceAll(',', ''), Number);
            setRow7(matrixResultRow7);

            const matrixResultRow8 = Array.from(noiseGetRow8Str.replaceAll(',', ''), Number);
            setRow8(matrixResultRow8);

            const matrixResultRow9 = Array.from(noiseGetRow9Str.replaceAll(',', ''), Number);
            setRow9(matrixResultRow9);

            const matrixResultRow10 = Array.from(noiseGetRow10Str.replaceAll(',', ''), Number);
            setRow10(matrixResultRow10);

            const matrixResultRow11 = Array.from(noiseGetRow11Str.replaceAll(',', ''), Number);
            setRow11(matrixResultRow11);

            const matrixResultRow12 = Array.from(noiseGetRow12Str.replaceAll(',', ''), Number);
            setRow12(matrixResultRow12);

            const matrixResultRow13 = Array.from(noiseGetRow13Str.replaceAll(',', ''), Number);
            setRow13(matrixResultRow13);
        }
    };

    console.log(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13);

    return <button onClick={getMatrixRowsData}>Get rows</button>;
};

export default Decode;
