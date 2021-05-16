function decimalConverter(n) {
    return (Math.round(+n * 100) / 100).toFixed(2);
}

export default  decimalConverter;