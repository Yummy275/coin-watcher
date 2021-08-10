const roundNumberString = (numString) => {
    const numStringToNumber = Number(numString);
    const rounded = numStringToNumber.toFixed(8);
    const formattedNum = Number(rounded);
    return formattedNum;
};

export default roundNumberString;
