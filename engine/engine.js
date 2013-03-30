var context;
var GameEngine = function(doc) {
	this.document = doc;
	
};
GameEngine.prototype = {
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
		return true;
	},
	saveState : function() {
		localStorage.player_posx = this.player_posx;
		localStorage.player_posy = this.player_posy;
	},
	loadState : function() {
		this.player_posx = localStorage.player_posx;
		this.player_posy = localStorage.player_posy;
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
        return true;
    },
    clearCanvas : function() {
    	context.clearRect(0,0,this.canvas.width,this.canvas.height);
    	this.setBackgroundColor("black");
    	return true;
    },
    setCanvas : function(given_canvas) {
        this.canvas = given_canvas;
        try {
            context = given_canvas.getContext('2d');
        }
        catch (err) {
            console.log("Error through: "+err.message);
        }
        return true;
    },
    setAudio: function(given_audio) {
        this.audio = given_audio;
        return true;
    },
    setVideo: function(given_video)  {
    	this.video = given_video;
    	return true;
    },
    renderCanvas : function(width,height) {
        this.canvas.setAttribute("width", width);
        this.canvas.setAttribute("height", height);
        return true;
    },
    renderAudio : function(audiofile, format) {
        for (var i = 0; i < audiofile.length; i++)
        {
            source = this.document.createElement("source");
            source.setAttribute("src", audiofile[i]);
            source.setAttribute("type", format[i]);
            this.audio.appendChild(source);
        }
        
        //this.audio.setAttribute("src", audiofile);
        //this.audio.setAttribute("type", format);
        return true;
    },
    renderVideo: function(videofile,format) {
        for (var i = 0; i < videofile.length; i++)
        {
            source = this.document.createElement("source");
            source.setAttribute("src", videofile[i]);
            source.setAttribute("type", format[i]);
            this.video.appendChild(source);
        }
    	//this.video.setAttribute("src", videofile);
    	//this.video.setAttribute("type", format);
    	return true;
    },
    writeText : function(text,font,color,size,posx,posy) {
        context.fillStyle = color;
        context.font = size+" "+font;
        context.fillText(text,posx,posy);
        return true;
    },
    setBackgroundColor : function (color) {
        context.fillStyle = color;
        context.fillRect(0,0,this.canvas.width,this.canvas.height);
        return true;
    },
    setAudioVolume : function (volume) {
        this.audio.volume = volume;
        return true;
    },
    setAudioControls : function (controls) {
    	if (controls == true)
    	{
    		this.audio.setAttribute("controls", "controls");
    	}
    	else {
    		this.audio.setAttribute("controls", "none");
    	}
    	return true;
    },
    setVideoControls : function (controls) {
    	if (controls == true)
    	{
    		this.video.setAttribute("controls", "controls");
    	}
    	else {
    		this.video.setAttribute("controls", "none");
    	}
    	return true;
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
    	return true;
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
    	return true;
    },
    initMap : function (map)
    {	
    	newScript = this.document.createElement("script");
    	this.document.getElementsByTagName("head")[0].appendChild(newScript);
    	newScript.type = "text/javascript";
    	newScript.src = "assets/maps/"+map+".js";
    	return true;
    },
    setMap : function(map) {
    	this.currentMap = map;
    	return this;
    },
    getMap : function() {
    	return this.currentMap;
    },
    loadMap : function() {
        //console.log(this.currentMap);
    	switch(this.currentMap) {
    	case "map0":
    		generateMap0(this);
    		break;
    	case "map1_1":
    		generateMap1_1(this);
    		break;
    	case "map1_2":
    		generateMap1_2(this);
    		break;
    	}
    	return this;
    },
    loadPlayer : function(img,posx,posy) {
    	this.player_posx = posx;
    	this.player_posy = posy;
    	this.player = new Image();
    	this.player.src = "assets/images/tiles/"+img+".png";
    	context.drawImage(this.player,this.player_posx,this.player_posy);
    	return true;
    },
    setPlayerPos : function(pos) {
    	this.player_posx = pos[0];
        this.player_posy = pos[1];
    	return true;
    },
    getPlayerPos : function() {
    	return [this.player_posx,this.player_posy];
    	
    },
};
