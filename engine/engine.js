var canvas;
var context;
var audio;
var Engine = function() {};
Engine.prototype = {
    getElement : function(element) {
        if (element == "canvas")
        {
            return canvas;
        }
        else if (element == "context")
        {
            return context;
        }
        else if (element == "audio")
        {
            return audio;
        }
        else {
            return 0;
        }
    },
    setCanvas : function(given_canvas) {
        canvas = given_canvas;
        try {
            context = given_canvas.getContext('2d');
        }
        catch (err) {
            console.log("Error through: "+err.message)
        }
    },
    setAudio: function(given_audio) {
        audio = given_audio;
    },
    renderCanvas : function(width,height) {
        canvas.setAttribute("width", width)
        canvas.setAttribute("height", height)
    },
    renderAudio : function(audiofile) {
        audio.setAttribute("src", audiofile);
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
    setAudioVolume : function (volume) {
        audio.volume = volume;
    },
};
