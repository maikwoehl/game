var context;
var Engine = function() {};
Engine.prototype = {
	init : function(type,object) {
		switch(type)
		{
		case "canvas":
			this.canvas = object;
			try {
	            context = this.canvas.getContext('2d');
	        }
	        catch (err) {
	            console.log("Error through: "+err.message);
	        }
		case "audio":
			this.audio = object;
		case "video":
			this.video = object;
		}
	},
    getElement : function(element) {
        if (element == "canvas")
        {
            return this.canvas;
        }
        else if (element == "context")
        {
            return context;
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
            context = given_canvas.getContext('2d');
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
        context.fillStyle = color;
        context.font = size+" Arial";
        context.fillText("DaemonTutorials",posx,posy);
    },
    setBackgroundColor : function (color) {
        context.fillStyle = color;
        context.fillRect(0,0,this.canvas.width,this.canvas.height);
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
