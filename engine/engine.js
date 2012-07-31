var Engine = function() {};
Engine.prototype = {
	init : function() {
		this.canvas = "";
		this.context = "";
		this.audio = "";
		this.video = "";
	},
    getElement : function(element) {
        if (element == "canvas")
        {
            return this.canvas;
        }
        else if (element == "context")
        {
            return this.context;
        }
        else if (element == "audio")
        {
            return this.audio;
        }
        else if (element == "video")
        {
        	return this.video;
        }
        else {
            return 0;
        }
    },
    setCanvas : function(given_canvas) {
        this.canvas = given_canvas;
        try {
            this.context = given_canvas.getContext('2d');
        }
        catch (err) {
            console.log("Error through: "+err.message);
        }
    },
    setAudio: function(given_audio) {
        this.audio = given_audio;
    },
    setVideo: function(given_video)  {
    	this.video = given_video;
    },
    renderCanvas : function(width,height) {
        this.canvas.setAttribute("width", width);
        this.canvas.setAttribute("height", height);
    },
    renderAudio : function(audiofile, format) {
        this.audio.setAttribute("src", audiofile);
        this.audio.setAttribute("type", format);
    },
    renderVideo: function(videofile,format) {
    	this.video.setAttribute("src", videofile);
    	this.video.setAttribute("type", format);
    },
    writeLogo : function(color,size,posx,posy) {
        this.context.fillStyle = color;
        this.context.font = size+" Arial";
        this.context.fillText("DaemonTutorials",posx,posy);
    },
    setBackgroundColor : function (color) {
        this.context.fillStyle = color;
        this.context.fillRect(0,0,canvas.width,canvas.height);
    },
    setAudioVolume : function (volume) {
        this.audio.volume = volume;
    },
    setVideoControls : function (controls) {
    	if (controls == true)
    	{
    		this.video.setAttribute("controls", "controls");
    	}
    	else {
    		this.video.setAttribute("controls", "none");
    	}
    }
};
