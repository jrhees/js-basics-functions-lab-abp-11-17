// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return 264 * Math.abs(startingBlock-endingBlock);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  switch (true) {
    case (distance >2500):
      return 'cannot travel that far';
      break;
    case (distance <400):
      return 0;

      break;
    default:

  }
}
