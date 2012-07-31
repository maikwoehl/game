var canvas;
var context;
var audio;
var video;
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
        else if (element == "video")
        {
        	return video;
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
            console.log("Error through: "+err.message);
        }
    },
    setAudio: function(given_audio) {
        audio = given_audio;
    },
    setVideo: function(given_video)  {
    	video = given_video;
    },
    renderCanvas : function(width,height) {
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
    },
    renderAudio : function(audiofile, format) {
        audio.setAttribute("src", audiofile);
        audio.setAttribute("type", format);
    },
    renderVideo: function(videofile,format) {
    	video.setAttribute("src", videofile);
    	video.setAttribute("type", format);
    },
    writeLogo : function(color,size,posx,posy) {
        context.fillStyle = color;
        context.font = size+" Arial";
        context.fillText("DaemonTutorials",posx,posy);
    },
    setBackgroundColor : function (color) {
        context.fillStyle = color;
        context.fillRect(0,0,canvas.width,canvas.height);
    },
    setAudioVolume : function (volume) {
        audio.volume = volume;
    },
    setVideoControls : function (controls) {
    	if (controls == true)
    		{
    			video.setAttribute("controls", "controls");
    		}
    	else {
    		video.setAttribute("controls", "none");
    	}
    }
};
