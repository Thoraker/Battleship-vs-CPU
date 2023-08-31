import PropTypes from 'prop-types';

export function CpuRandomPlays(playerShips, cpuMemoryBoard) {
  const shot = Math.floor(Math.random() * 100);
  if (playerShips[shot] === 0) {
    cpuMemoryBoard[shot] = 6;
    playerShips[shot] = 6;
  } else if (playerShips[shot] === 6) {
    CpuRandomPlays(playerShips, cpuMemoryBoard);
  } else {
    cpuMemoryBoard[shot] = playerShips[shot];
    playerShips[shot] = 7;
  }
}

export function CpuFollowPlays(
  lowestIndexHit,
  highestIndexHit,
  playerShips,
  cpuMemoryBoard,
  cpuNextTry
) {
  let shot = 0;
  if (cpuNextTry === 'left') {
    if (lowestIndexHit < 1) {
      shot = highestIndexHit + 1;
      cpuNextTry = 'right';
    } else {
      shot = lowestIndexHit - 1;
    }
  } else if (cpuNextTry === 'right') {
    if (highestIndexHit > 98) {
      shot = lowestIndexHit - 1;
      cpuNextTry = 'left';
    } else {
      shot = highestIndexHit + 1;
    }
  } else if (cpuNextTry === 'up') {
    if (lowestIndexHit < 10) {
      shot = highestIndexHit + 10;
      cpuNextTry = 'down';
    } else {
      shot = lowestIndexHit - 10;
    }
  } else {
    if (highestIndexHit > 89) {
      shot = lowestIndexHit - 10;
      cpuNextTry = 'up';
    } else {
      shot = highestIndexHit + 10;
    }
  }
  if (playerShips[shot] === 0) {
    cpuMemoryBoard[shot] = 6;
    playerShips[shot] = 6;
    if (cpuNextTry === 'left') {
      cpuNextTry = 'right';
    } else if (cpuNextTry === 'right') {
      cpuNextTry = 'up';
    } else if (cpuNextTry === 'up') {
      cpuNextTry = 'down';
    } else {
      cpuNextTry = 'left';
    }
  } else if (playerShips[shot] === 6) {
    if (cpuNextTry === 'left') {
      cpuNextTry = 'right';
    } else if (cpuNextTry === 'right') {
      cpuNextTry = 'up';
    } else if (cpuNextTry === 'up') {
      cpuNextTry = 'down';
    } else {
      cpuNextTry = 'left';
    }
    CpuFollowPlays(
      lowestIndexHit,
      highestIndexHit,
      playerShips,
      cpuMemoryBoard,
      cpuNextTry
    );
  } else {
    cpuMemoryBoard[shot] = playerShips[shot];
    playerShips[shot] = 7;
  }
}

CpuRandomPlays.propTypes = {
  playerShips: PropTypes.array,
  cpuMemoryBoard: PropTypes.array,
  cpuNextTry: PropTypes.string,
};
