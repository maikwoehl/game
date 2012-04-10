var canvas;
var context;
var Engine = function() {};
Engine.prototype = {
    setCanvas : function(given_canvas) {
        canvas = given_canvas;
        try {
            context = given_canvas.getContext('2d');
        }
        catch (err) {
            console.log("Error through: "+err.message)
        }
    },
    render : function(width,height) {
        canvas.setAttribute("width", width)
        canvas.setAttribute("height", height)
    },
    writeLogo : function(color,size,posx,posy) {
        context.fillStyle = color;
        context.font = size+" Arial";
        context.fillText("DaemonTutorials",posx,posy);
    },
    setBackgroundColor : function (color) {
        context.fillStyle = color;
        context.fillRect(0,0,canvas.width,canvas.height)
    },
};
