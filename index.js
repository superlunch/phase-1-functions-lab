const hq = 42;

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - hq);
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let fare = 0;
    let distance = distanceTravelledInFeet(start, destination);

    /*
    if (distance < 400){
        return 0
    } else if (distance < 2000){
        return (distance - 400) * .02
    } else if (distance < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
    }
    */

    if (distance > 400) {
        if (distance > 2000) {
            if (distance > 2500) {
                fare = `cannot travel that far`;
            } else {
                fare = 25;
            }
        } else {
            fare = (distance - 400) * .02;
        }
    } else {
        fare = 0;
    }
    return fare;
}