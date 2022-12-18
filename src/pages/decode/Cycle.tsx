import React, { useEffect, useState } from 'react';
import { horizontalMatrix, horizontalMatrixTransposed, verticalMatrix, verticalMatrixTransposed } from '../../data/HorizontalMatrix';
import _ from 'lodash';
import './Cycle.css';

const Cycle = () => {
    const [horizontalDecodeResult, setHorizontalDecodeResult] = useState<number[][]>([]);

    const [targetMatrix, setTargetMatrix] = useState<number[][]>([]);

    const [verticalTargetMatrix, setVerticalTargetMatrix] = useState<number[][]>([]);
    const [verticalDecodeResult, setVerticalDecodeResult] = useState<number[][]>([]);

    const [isMatrixReachable, setMatrixReachable] = useState(false);
    const [isVerticalMatrixReachable, setVerticalMatrixReachable] = useState(false);

    // const [isFirstHorizontalDecodeDone, setIsFirstHorizontalDecodeDone] = useState(false);
    // const [isSyndromHorizontalFound, setIsSyndromHorizontalFound] = useState(false);
    // const [isSecondHorizontalDecodeDone, setIsSecondHorizontalDecodeDone] = useState(false);

    // const [isVerticalTargetMatrixGot, setIsVerticalTargetMatrixGot] = useState(false);
    // const [isFirstVerticalDecodeDone, setIsFirstVerticalDecodeDone] = useState(false);
    // const [isSyndromVerticalFound, setIsSyndromVerticalFound] = useState(false);
    // const [isSecondVerticalDecodeDone, setIsSecondVerticalDecodeDone] = useState(false);

    const readNoiseMatrix = () => {
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

        console.log('CALLED READ NOISE MATRIX');

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
            const matrixResultRow2 = Array.from(noiseGetRow2Str.replaceAll(',', ''), Number);
            const matrixResultRow3 = Array.from(noiseGetRow3Str.replaceAll(',', ''), Number);
            const matrixResultRow4 = Array.from(noiseGetRow4Str.replaceAll(',', ''), Number);
            const matrixResultRow5 = Array.from(noiseGetRow5Str.replaceAll(',', ''), Number);
            const matrixResultRow6 = Array.from(noiseGetRow6Str.replaceAll(',', ''), Number);
            const matrixResultRow7 = Array.from(noiseGetRow7Str.replaceAll(',', ''), Number);
            const matrixResultRow8 = Array.from(noiseGetRow8Str.replaceAll(',', ''), Number);
            const matrixResultRow9 = Array.from(noiseGetRow9Str.replaceAll(',', ''), Number);
            const matrixResultRow10 = Array.from(noiseGetRow10Str.replaceAll(',', ''), Number);
            const matrixResultRow11 = Array.from(noiseGetRow11Str.replaceAll(',', ''), Number);
            const matrixResultRow12 = Array.from(noiseGetRow12Str.replaceAll(',', ''), Number);
            const matrixResultRow13 = Array.from(noiseGetRow13Str.replaceAll(',', ''), Number);

            setTargetMatrix([
                matrixResultRow1,
                matrixResultRow2,
                matrixResultRow3,
                matrixResultRow4,
                matrixResultRow5,
                matrixResultRow6,
                matrixResultRow7,
                matrixResultRow8,
                matrixResultRow9,
                matrixResultRow10,
                matrixResultRow11,
                matrixResultRow12,
                matrixResultRow13
            ]);
        }
    };

    // const callReadNoise = () => {
    //     readNoiseMatrix();
    // };

    useEffect(() => {
        readNoiseMatrix();
    }, []);

    const findNumberOfCoincidences = (matrix1: number[], matrix2: number[]) => {
        let counter = 0;

        for (let i = 0; i < matrix1.length; i++) {
            if (matrix1[i] === matrix2[i] && matrix1[i] === 1) {
                counter++;
            }
        }

        return counter;
    };

    const doHorizontalDecode = () => {
        let parityCheckResults = [];
        // setIsFirstHorizontalDecodeDone(true);

        for (let i = 0; i < targetMatrix.length; i++) {
            const targetMatrixRow = targetMatrix[i];

            let resultArr = [];

            for (let j = 0; j < horizontalMatrix.length; j++) {
                const horizontalMatrixRow = horizontalMatrix[j];

                const targetAndHorizontal = findNumberOfCoincidences(targetMatrixRow, horizontalMatrixRow);

                const isEven = targetAndHorizontal % 2 === 0;
                const parityCheckResult = isEven ? 0 : 1;

                resultArr.push(parityCheckResult);
            }

            // console.log('result array: ', resultArr);
            parityCheckResults.push(resultArr);
        }

        console.log('parity results array: ', parityCheckResults);
        setHorizontalDecodeResult(parityCheckResults);
        setMatrixReachable(true);
    };

    // console.log('horizontal checks result: ', horizontalDecodeResult);

    const findSyndromFunc = (horizontalChecksResult: number[][], horizontalMatrixTransposed: number[][]) => {
        for (let i = 0; i < horizontalChecksResult.length; i++) {
            const horizontalChecksResultElement = horizontalChecksResult[i];
            const isEqualToZeroArray = _.isEqual(horizontalChecksResultElement, [0, 0, 0, 0, 0]);

            // console.log(isEqualToZeroArray);

            if (!isEqualToZeroArray) {
                // console.log('at least 1 error in row ', i + 1);

                for (let j = 0; j < horizontalMatrixTransposed.length; j++) {
                    const horizontalMatrixTransposedElement = horizontalMatrixTransposed[j];

                    const isEqualHorizotalElementToTransposed = _.isEqual(horizontalChecksResultElement, horizontalMatrixTransposedElement);

                    if (isEqualHorizotalElementToTransposed) {
                        // console.log(horizontalMatrixTransposedElement, '===', horizontalChecksResultElement, '(row ', i + 1, '=== row ', j + 1, ')');

                        if (targetMatrix[i][j] === 1) {
                            let targetMatrixToEdit = _.clone(targetMatrix);
                            targetMatrixToEdit[i][j] = 0;

                            setTargetMatrix(targetMatrixToEdit);
                        } else {
                            let targetMatrixToEdit = _.clone(targetMatrix);
                            targetMatrixToEdit[i][j] = 1;

                            setTargetMatrix(targetMatrixToEdit);
                        }
                    }
                }
            } else {
                console.log('row ', i + 1, ' is correct');
            }
        }
    };

    // const fixOnlyErrors = () => {
    //     findSyndromFunc(horizontalDecodeResult, horizontalMatrixTransposed);
    // };

    const fixErrorsHorizontal = () => {
        findSyndromFunc(horizontalDecodeResult, horizontalMatrixTransposed);
    };

    const getVerticalTargetMatrix = (targetMatrix: number[][]) => {
        const targetCloneForVertical = _.clone(targetMatrix);
        const result: any = _.zip.apply(_, targetCloneForVertical);
        setVerticalTargetMatrix(result);
        console.log('vertical target matrix: ', result);
    };

    const callVerticalTargetMatrix = () => {
        getVerticalTargetMatrix(targetMatrix);
    };

    const findNumberOfCoincidencesVertical = (matrix1: number[], matrix2: number[]) => {
        let counter = 0;

        for (let i = 0; i < matrix1.length; i++) {
            if (matrix1[i] === matrix2[i] && matrix1[i] === 1) {
                counter++;
            }
        }

        return counter;
    };

    const doVerticalDecode = () => {
        let parityCheckResults = [];

        for (let i = 0; i < verticalTargetMatrix.length; i++) {
            const targetMatrixColumn = verticalTargetMatrix[i];

            let resultArr = [];

            for (let j = 0; j < verticalMatrix.length; j++) {
                const verticalMatrixColumn = verticalMatrix[j];

                const targetAndVertical = findNumberOfCoincidencesVertical(targetMatrixColumn, verticalMatrixColumn);

                const isEven = targetAndVertical % 2 === 0;
                const parityCheckResult = isEven ? 0 : 1;

                resultArr.push(parityCheckResult);
            }

            // console.log('result array: ', resultArr);
            parityCheckResults.push(resultArr);
        }

        console.log('parity vertical check results array: ', parityCheckResults);
        setVerticalDecodeResult(parityCheckResults);
        setVerticalMatrixReachable(true);
    };

    const findSyndromFuncVertical = (verticalDecodeResult: number[][], verticalMatrixTransposed: number[][]) => {
        for (let i = 0; i < verticalDecodeResult.length; i++) {
            const verticalChecksResultElement = verticalDecodeResult[i];
            const isEqualToZeroArray = _.isEqual(verticalChecksResultElement, [0, 0, 0, 0]);

            // console.log(isEqualToZeroArray);

            if (!isEqualToZeroArray) {
                // console.log('at least 1 error in column ', i + 1);

                for (let j = 0; j < verticalMatrixTransposed.length; j++) {
                    const verticalMatrixTransposedElement = verticalMatrixTransposed[j];

                    const isEqualVerticalElementToTransposed = _.isEqual(verticalChecksResultElement, verticalMatrixTransposedElement);

                    if (isEqualVerticalElementToTransposed) {
                        // console.log(verticalMatrixTransposedElement, '===', verticalChecksResultElement, '(row vertical ', i + 1, '=== row vertical ', j + 1, ')');

                        if (verticalTargetMatrix[i][j] === 1) {
                            let verticalTargetMatrixToEdit = _.clone(verticalTargetMatrix);
                            verticalTargetMatrixToEdit[i][j] = 0;

                            setVerticalTargetMatrix(verticalTargetMatrixToEdit);
                        } else {
                            let verticalTargetMatrixToEdit = _.clone(verticalTargetMatrix);
                            verticalTargetMatrixToEdit[i][j] = 1;

                            setVerticalTargetMatrix(verticalTargetMatrixToEdit);
                        }
                    }
                }
            } else {
                console.log('column ', i + 1, ' is correct');
            }
        }
    };

    const fixErrorsVertical = () => {
        findSyndromFuncVertical(verticalDecodeResult, verticalMatrixTransposed);
        // doVerticalDecode();
        // transposeFromVerticalToTarget(verticalTargetMatrix);
    };

    const transposeFromVerticalToTarget = (verticalTargetMatrix: number[][]) => {
        const targetCloneForVerticalTranspose = _.clone(verticalTargetMatrix);
        const result: any = _.zip.apply(_, targetCloneForVerticalTranspose);
        setTargetMatrix(result);
        // console.log('transpose back result', result);
    };

    const callTransposeBack = () => {
        transposeFromVerticalToTarget(verticalTargetMatrix);
    };

    // const final = () => {
    //     doHorizontalDecode();
    //     console.log('horizontal first decode called');

    //     if (isFirstHorizontalDecodeDone === true) {
    //         findSyndromFunc(horizontalDecodeResult, horizontalMatrixTransposed);
    //         setIsSyndromHorizontalFound(true);

    //         console.log('horizontal syndrom finding called');

    //         if (isSyndromHorizontalFound) {
    //             setIsSecondHorizontalDecodeDone(true);
    //             doHorizontalDecode();

    //             console.log('horizontal second decode called');

    //             if (isSecondHorizontalDecodeDone) {
    //                 getVerticalTargetMatrix(targetMatrix);
    //                 setIsVerticalTargetMatrixGot(true);

    //                 if (isVerticalTargetMatrixGot) {
    //                     doVerticalDecode();
    //                     setIsFirstVerticalDecodeDone(true);

    //                     if (isFirstVerticalDecodeDone) {
    //                         findSyndromFuncVertical(verticalDecodeResult, verticalMatrixTransposed);
    //                         setIsSyndromVerticalFound(true);

    //                         if (isSyndromVerticalFound) {
    //                             doVerticalDecode();
    //                             setIsSecondVerticalDecodeDone(true);
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

    // console.log('target matrix: ', targetMatrix);
    // console.log('vertical target matrix: ', verticalTargetMatrix);
    // console.log('parity vertical check results array: ', verticalDecodeResult);
    const emptyHorizontal = [0, 0, 0, 0, 0];
    const emptyVertical = [0, 0, 0, 0];

    const checkWasMessageIsRenewed = () => {
        const horizontalRes = _.clone(horizontalDecodeResult);
        const verticalRes = _.clone(verticalDecodeResult);

        if (
            _.isEqual(horizontalRes[0], emptyHorizontal) &&
            _.isEqual(horizontalRes[1], emptyHorizontal) &&
            _.isEqual(horizontalRes[2], emptyHorizontal) &&
            _.isEqual(horizontalRes[3], emptyHorizontal) &&
            _.isEqual(horizontalRes[4], emptyHorizontal) &&
            _.isEqual(horizontalRes[5], emptyHorizontal) &&
            _.isEqual(horizontalRes[6], emptyHorizontal) &&
            _.isEqual(horizontalRes[7], emptyHorizontal) &&
            _.isEqual(horizontalRes[8], emptyHorizontal) &&
            _.isEqual(horizontalRes[9], emptyHorizontal) &&
            _.isEqual(horizontalRes[10], emptyHorizontal) &&
            _.isEqual(horizontalRes[11], emptyHorizontal) &&
            _.isEqual(horizontalRes[12], emptyHorizontal) &&
            _.isEqual(verticalRes[1], emptyVertical) &&
            _.isEqual(verticalRes[2], emptyVertical) &&
            _.isEqual(verticalRes[3], emptyVertical) &&
            _.isEqual(verticalRes[4], emptyVertical) &&
            _.isEqual(verticalRes[5], emptyVertical) &&
            _.isEqual(verticalRes[6], emptyVertical) &&
            _.isEqual(verticalRes[7], emptyVertical) &&
            _.isEqual(verticalRes[8], emptyVertical) &&
            _.isEqual(verticalRes[9], emptyVertical) &&
            _.isEqual(verticalRes[10], emptyVertical) &&
            _.isEqual(verticalRes[11], emptyVertical) &&
            _.isEqual(verticalRes[12], emptyVertical) &&
            _.isEqual(verticalRes[13], emptyVertical) &&
            _.isEqual(verticalRes[14], emptyVertical) &&
            _.isEqual(verticalRes[15], emptyVertical) &&
            _.isEqual(verticalRes[16], emptyVertical) &&
            _.isEqual(verticalRes[17], emptyVertical) &&
            _.isEqual(verticalRes[18], emptyVertical) &&
            _.isEqual(verticalRes[19], emptyVertical)
        ) {
            window.alert('Everything is clear');
        }
    };

    return (
        <div className="some-cycle">
            <div className="buttons-container">
                <div className="buttons-step-by-step">
                    <p>Do step-by-step</p>
                    <button onClick={doHorizontalDecode}>Do horizontal checks</button>
                    <button onClick={fixErrorsHorizontal}>Fix errors by Horizontal</button>
                    <button onClick={doHorizontalDecode}>Do horizontal checks again</button>
                    <button onClick={callVerticalTargetMatrix}>Get values for vertical decoding</button>
                    <button onClick={doVerticalDecode}>Do verical checks</button>
                    <button onClick={fixErrorsVertical}>Fix errors by Vertical</button>
                    <button onClick={doVerticalDecode}>Do verical checks again</button>
                    <button onClick={callTransposeBack}>Update target matrix state</button>
                    <button onClick={checkWasMessageIsRenewed}>Check if message was renewed</button>

                    {/* <button onClick={callVerticalTargetMatrix}>Get vertical target matrix</button>
                    <button onClick={doVerticalDecode}>Do vertical checks</button>
                    <button onClick={fixErrorsVertical}>Fix errors Vertical</button> */}
                    {/* <button onClick={callTransposeBack}>Transpose back</button> */}
                </div>
                {/* <div className="do-in-one">
                    <p>Do whole decoding in one click</p>
                    <button id="do-in-one" onClick={final}>
                        Do in one click
                    </button>
                </div> */}
            </div>
            {isMatrixReachable && (
                <div className="cycle-wrapper">
                    <div className="final-matrix-wrapper">
                        <div className="column-numbers-wrapper matrix-row">
                            <div className="column-number">Pos</div>
                            {targetMatrix[0].map((element, index) => {
                                return (
                                    <div key={index} className="column-number">
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                        {targetMatrix.map((row, index) => {
                            return (
                                <div key={index} className="matrix-row">
                                    <div className="matrix-element column-number">{index + 1}</div>
                                    {row.map((element, zalupa) => {
                                        return (
                                            <div key={zalupa} className="matrix-element">
                                                {element}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className="horizontal-matrix-wrapper">
                        <div className="column-numbers-wrapper matrix-row">
                            {horizontalDecodeResult[0].map((element, index) => {
                                return (
                                    <div key={index} className="column-number">
                                        h-d
                                    </div>
                                );
                            })}
                        </div>
                        {horizontalDecodeResult.map((row, index) => {
                            return (
                                <div key={index} className="matrix-row">
                                    {row.map((element, zalupa) => {
                                        return (
                                            <div key={zalupa} className="matrix-element">
                                                {element}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {isVerticalMatrixReachable && (
                <div className="vertical-decode-wrapper">
                    <div className="row-numbers-wrapper">
                        {verticalDecodeResult[0].map((element, index) => {
                            return (
                                <div key={index} className="row-number">
                                    v-d
                                </div>
                            );
                        })}
                    </div>
                    {verticalDecodeResult.map((column, index) => {
                        return (
                            <div key={index} className="vertical-column">
                                {column.map((element, item) => {
                                    return (
                                        <div key={item} className="vertical-element">
                                            {element}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cycle;
