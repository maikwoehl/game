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
	        break;
		case "audio":
			this.audio = object;
			break;
		case "video":
			this.video = object;
			break;
		case "map":
			this.mapSize = object;
			// Canvas Size
			canvasWidth = this.canvas.getAttribute("width");
			canvasHeight = this.canvas.getAttribute("height");
			
			tileWidth = canvasWidth / this.mapSize;
			tileHeight = canvasHeight / this.mapSize;
			
			this.tileSize = [tileWidth,tileHeight];
			
			console.log("1 quad: " + this.tileSize[0] + "x" + this.tileSize[1]);
			break;
		}
	},
    get : function(val) {
        switch(val) {
        case "canvas":
        	return this.canvas;
        	break;
        case "context":
        	return context;
        	break;
        case "audio":
        	return this.audio;
        	break;
        case "video":
        	return this.video;
        	break;
        case "tileSize":
        	return this.tileSize;
        	break;
        }
    },
    clearCanvas : function() {
    	context.clearRect(0,0,this.canvas.width,this.canvas.height);
    	this.setBackgroundColor("black");
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
    writeText : function(text,font,color,size,posx,posy) {
        context.fillStyle = color;
        context.font = size+" "+font;
        context.fillText(text,posx,posy);
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
    },
    addTile : function (name,pos) {
    	switch(name) {
    	case "grass":
    		context.fillStyle = "green";
    		context.fillRect(this.tileSize[0]*pos[0],this.tileSize[1]*pos[1], this.tileSize[0], this.tileSize[1]);
    	
    	}
    	
    	tile = new Image();
    	tile.src = "assets/images/tiles/"+name+".png";
    	context.drawImage(tile,this.tileSize[0]*pos[0],this.tileSize[1]*pos[1]);
    },
    addGrid : function ()
    {
    	var x;
    	var y;
    	for (x = 0; x < 15; x++)
    	{
    		for (y = 0; y < 15; y++)
    		{
    			context.strokeStyle = "white";
    			context.strokeRect(this.tileSize[0]*x,this.tileSize[1]*y, this.tileSize[0], this.tileSize[1]);
    		}	
    	}
    },
};
