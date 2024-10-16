<title>Lamp</title>

<div id="turnon">
	<a href="#turnon" class="lamp">.</a>
	<a href="#turnoff" class="turnoff">.</a>
	<div class="string"></div>
	<div class="bulb"></div>
	<div class="light"></div>
	<div class="content">
		  <h1>Lemuel</h1>
		  <h2>text text text</h2>
  
		  <ul>
			  <li>github</li>
			  <li>spotify</li>
			  <li>instagram</li>
		  </ul>
	  </div>
  </div>
  
  <div>
	<p>Hoi</p>
  </div>

<style>

.content{
    justify-self: center;
    position: absolute;
    bottom: 20%;
}
h1, h2, a, li{
  text-align: center;
  color: #000
  sans-serif;
}
h1{
    font-size: 3em;
}
ul{
    display: flex;
    justify-content: space-between;
}
div > p{
  color: white;
}
#turnon{
  width:100%;
  height:100%;
  display:block;
  /* background:#111; */
  background-color: #fff;
  transition: 300ms;
}

.lamp,.turnoff{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  margin-left:-100px;
  position:absolute;
  border-bottom: 100px solid #444;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  z-index:11;
}

.turnoff{ display: none; }

.bulb{
  position:absolute;
  top:90px;
  left:50%;
  height:32px;
  width:32px;
  margin-left:-16px;
  background:#777;
  border-radius:32px;
  z-index:9;
  transition: 300ms;
  -webkit-transition-delay:300ms;
}

.string{
  position:absolute;
  top:90px;
  left:50%;
  margin-left:25px;
  height:100px;
  width:2px;
  background:#999;
  display:block;
  z-index:10;
}

.light{
  width: 50px;
  height: 0;
  top: 90px;
  left: 50%;
  margin: -135px 0 0 -740px;
  border: 715px solid;
  border-top: none;
  border-bottom: 1400px solid #000;
  opacity: 0;
  position: absolute;
  transition: 300ms;
  -webkit-transition-delay:300ms;
}

#turnon:target .light{ opacity:1; }
#turnon:target .bulb{ background:#FAEB83; }
#turnon:target .turnoff{ display:block; }
#turnon:target .lamp{ display:none; }
#turnon:target .string{ -webkit-animation:pull 500ms; }

@-webkit-keyframes pull{
  0%{ height:100px; background:#666; }
  50%{ height:120px; }
  100%{ height:100px; }
}
</style>