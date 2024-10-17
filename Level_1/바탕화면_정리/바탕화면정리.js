const wallpaper = ['#.', '..'];

// 2중 반복문을 3번이나 돌린다...
const solution = (wallpaper) => {
  const location = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };

  const coordinate = [];

  for (let i = 0; i < wallpaper.length; i++) {
    const line = wallpaper[i].split('');
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '#') {
        coordinate.push(j);
      }
    }
  }

  location.left = Math.min(...coordinate);
  location.right = Math.max(...coordinate) + 1;

  top: for (let i = 0; i < wallpaper.length; i++) {
    const line = wallpaper[i].split('');
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '#') {
        location.top = i;
        break top;
      }
    }
  }

  bottom: for (let i = wallpaper.length - 1; i >= 0; i--) {
    const line = wallpaper[i].split('');
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '#') {
        location.bottom = i + 1;
        break bottom;
      }
    }
  }

  const answer = Object.values(location);

  return answer;
};

solution(wallpaper);
