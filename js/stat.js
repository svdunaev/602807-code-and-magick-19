'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 50;
var barWidth = 150;

var getRandomSaturation = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var fillBarColor = function (playerName, ctx) {
  if (playerName === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, ' + getRandomSaturation(1, 100) + '%, 50%)';
  }
};


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, (CLOUD_Y + GAP) * 1);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, (CLOUD_Y + GAP) * 2);

  var maxTime = getMaxElement(times);

  var playerIndex = 0;
  var playerName = 'Вы';

  for (var i = 0; i < players.length; i++) {
    //если добавить сюда вызов функции fillBarColor, консоль пишет, что ctx not defined
    ctx.fillStyle = this.fillBarColor(players[i]);
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_HEIGHT) * i, CLOUD_Y + 150, BAR_HEIGHT, -(barWidth * times[i]) / maxTime);
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_HEIGHT) * i, CLOUD_Y + 180);
  }
};


