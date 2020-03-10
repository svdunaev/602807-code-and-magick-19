'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx){
    renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, 100, 50, '#fff');

};
