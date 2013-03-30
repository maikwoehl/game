function techdemo() {
    // Construct
    engine = new GameEngine(document); // new object

    engine.init("canvas",document.getElementById("game")); // set canvas element
    engine.init("audio",document.getElementById('music')); // set audio element
    engine.init("video",document.getElementById("video")); // set video element
    
    engine.renderCanvas(480,480); // render canvas
    engine.renderAudio(["assets/audio/soundtrack-example.ogg","assets/audio/soundtrack-example.MP3"], ["audio/ogg", "audio/mp3"]); // render audio
    engine.setAudioControls(true);
    
    /*if (BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Firefox")
    {
    	engine.renderVideo("assets/video/html5video.ogv", "video/ogg"); // render video
    }
    else {
    	engine.renderVideo("assets/video/html5video.mp4", "video/mp4"); // render video
    } */
    engine.renderVideo(["assets/video/html5video.mp4","assets/video/html5video.ogv"],["video/mp4","video/ogg"]);
    
    engine.init("map", 15); // set map quad size
    engine.initMap("map0");
    engine.initMap("map1_1");
    engine.initMap("map1_2");
    window.setTimeout(function() {
        engine.setMap("map1_1").loadMap(); // Set Player Map
    },500);
    // Main
    engine.setBackgroundColor("black"); // set background color
    
    engine.setVideoControls(true); // Display Video Controls
    engine.get("video").setAttribute("width", 200);
    engine.get("video").setAttribute("height", 150);

    
    window.onkeydown = function (event) {
        console.log("Keycode:"+event.which); // Key Logger
        switch(event.which) {
        case 48: // Press 0
        	engine.clearCanvas();
        	engine.setMap("map0").loadMap();
        	break;
        case 49: // Press 1
        	engine.clearCanvas();
        	engine.setMap("map1_1").loadMap();
        	break;
        case 50: // Press 2
        	engine.clearCanvas();
        	engine.setMap("map1_2").loadMap();
        	break;
        case 71: // Press G
        	engine.addGrid();
        	break;
        case 80: // Press P
        	engine.loadPlayer("prototype_player",256,64);
        	break;
        case 87: // Press W
        	if (checkPos1_1(engine)) {
        		posy = engine.getPlayerPos()[1] - 10;
        	}
        	else {
        		posy = engine.getPlayerPos()[1] + 10;
        	}
        	engine.setPlayerPos([engine.getPlayerPos()[0],posy]);
        	engine.clearCanvas();
        	engine.loadMap(engine.getMap());
        	engine.loadPlayer("prototype_player",engine.getPlayerPos()[0],posy);
        	break;
        case 83: // Press S
        	if (checkPos1_1(engine)) {
        		posy = engine.getPlayerPos()[1] + 10;
        	}
        	else {
        		posy = engine.getPlayerPos()[1] -10 ;
        	}
        	engine.setPlayerPos([engine.getPlayerPos()[0],posy]);
        	engine.clearCanvas();
        	engine.loadMap(engine.getMap());
        	engine.loadPlayer("prototype_player",engine.getPlayerPos()[0],posy);
        	break;
        case 65: // Press A
        	if (checkPos1_1(engine)) {
        		posx = engine.getPlayerPos()[0] - 10;
        	}
        	else {
        		posx = engine.getPlayerPos()[0] +10 ;
        	}
        	engine.setPlayerPos([posx,engine.getPlayerPos()[1]]);
        	engine.clearCanvas();
        	engine.loadMap(engine.getMap());
        	engine.loadPlayer("prototype_player",posx,engine.getPlayerPos()[1]);
        	break;
        case 68: // Press D
        	if (checkPos1_1(engine)) {
        		posx = engine.getPlayerPos()[0] + 10;
        	}
        	else {
        		posx = engine.getPlayerPos()[0] -10 ;
        	}
        	engine.setPlayerPos([posx,engine.getPlayerPos()[1]]);
        	engine.clearCanvas();
        	engine.loadMap(engine.getMap());
        	engine.loadPlayer("prototype_player",posx,engine.getPlayerPos()[1]);
        	break;
        }
    };
    
}
