module.exports = function calculateHanoi(diskNumber, turnSpeed) {
    let turns = (2 ** diskNumber) - 1;
    let seconds = turns / (turnSpeed / 3600);
    return ({turns: turns, seconds: seconds});
}
