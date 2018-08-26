export default (expences) => {
    return expences
    .map((expence) => expence.amount)
    .reduce((sum, value) => sum+ value, 0);
};