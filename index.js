// Code your solution in this file!

// Calculate blocks
function distanceFromHqInBlocks(location) {
  if (location <= 42) {
    return 42 - location;
  } else {
    return location - 42;
  }
}

// Distance in feet from HQ
function distanceFromHqInFeet(location) {
  return 264 * distanceFromHqInBlocks(location);
}

// Distance travelled in feet
function distanceTravelledInFeet(start, stop) {
  if (start >= stop) {
    return 264 * (start - stop);
  } else {
    return 264 * (stop - start);
  }
}

// fare price
function calculatesFarePrice(start, stop) {
  let feet = distanceTravelledInFeet(start, stop);
  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else if (feet > 2500) {
    return "cannot travel that far";
  }
}
