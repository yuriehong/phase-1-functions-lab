// Code your solution in this file!
function distanceFromHqInBlocks(loc){
    return Math.abs(42 -loc);
}

function distanceFromHqInFeet(loc){
    return 264* (distanceFromHqInBlocks(loc));
}

function distanceTravelledInFeet(start, end){
    return 264*(Math.abs(end-start));

}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }
    else if(distance <=2000){
        return (distance-400)*0.02;
    }
    else if(distance <=2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}