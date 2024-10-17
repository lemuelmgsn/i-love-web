<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I love web</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:700,400" rel="stylesheet">
</head>

<body>
    <!-- Typing animation and carousel -->
    <section class="animation-section">
        <div class="wrapper">
            <h1 class="typing">
                We
                <span class="carousel">
                    <span class="change_inner">
                        <span class="element"> Love</span>
                        <span class="element"> ❤️</span>
                        <span class="element"> Love</span>
                        <span class="element"> ❤️</span>
                    </span>
                </span>
                Web
            </h1>
        </div>
        <a href="#div1" class="skip">scroll</a>
    </section>

    <!-- Div-1 content (separated from animation) -->
    <section>
        <div class="div-1" id="div1">
            <h3 class="h3-links">Title</h3>
            <h4>date</h4>
            <h5>Title</h5>
            <br>

            <div class="note-tekst">
                <h6>Title</h6>
                <p>text</p>
                <p>text</p>
                <br>
                <h6>Title</h6>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <br>
                <h6>Title</h6>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <br>
                <h6>Title</h6>
                <p>text</p>
                <p>text</p>
            </div>
        </div>    
    </section>
</body>
</html>


<style>
* {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
h6{
    font-size: 1em;
}

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Zorgt ervoor dat alles vanaf boven begint */
    background-color: black;
}

.animation-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Zorgt ervoor dat de animatie-sectie de volledige hoogte van het scherm vult */
    width: 100%; /* Breedt de volledige breedte */
    position: relative;
}
section{
    height: 100vh;
}
.wrapper {
    font-family: monospace;
    font-size: 1.5em;
    font-weight: bold;
    display: inline-block;
    text-align: center;
}

.typing {
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    animation: typing 3s steps(22), blink .5s step-end infinite alternate;
    /* color: rgb(18, 18, 18); */
    color: white;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 12ch; /* Past de breedte aan voor "We Love " */
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.skip {
    position: absolute;
    align-self: end;
    padding-bottom: 2em;
    animation: wiggleButton infinite 2s;
    text-decoration: none;
    /* color: black; */
    color: white;
    font-weight: bold;
}

@keyframes wiggleButton {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-1em);
    }
    100% {
        transform: translateY(0);
    }
}

/* Carousel styling */
.carousel {
    display: inline-block;
    overflow: hidden;
    height: 1.15em; /* Aangepast aan de line-height */
    vertical-align: bottom;
}

.change_inner {
    display: inline-block;
    animation: rotate 8s ease-in-out infinite;
}

.element {
    display: block;
    line-height: 1.15em; /* Line-height passend bij de omringende tekst */
    color: #F8312F;
}

@keyframes rotate {
    0%, 20% {
        transform: translateY(0);
    }
    25%, 45% {
        transform: translateY(-1.15em); /* Aangepast aan de grootte van de tekst */
    }
    50%, 70% {
        transform: translateY(-2.3em);
    }
    75%, 95% {
        transform: translateY(-3.45em);
    }
    100% {
        transform: translateY(-4.6em);
    }
}

/* Styles voor div-1 */
.div-1 {
    background-color: #c3c3c3;
    border-radius: 20px;
    text-align: left;
    padding: 10px;
    background-image: repeating-linear-gradient(
        white 0px calc(1lh - 1px),
        rgb(214, 214, 214) calc(1lh - 1px) 1lh
    );  
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 575px;
    width: 80%;
    margin: 20px auto;
}
.note-tekst{
    width: 450px;
}

/* Responsive font size adjustments */
@media only screen and (min-width: 600px) {
    .wrapper {
        font-size: 2em;
    }
}

@media only screen and (min-width: 900px) {
    .wrapper {
        font-size: 3em;
    }
}

</style>