<title>I love web</title>

<section>
    <div class="wrapper">
        <p class="typing">
          We Love Web
        </p>
    </div>
</section>

<style>

*{
    font-family: sans-serif;
}

.wrapper {
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
}

.typing {
  width: 11ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 5em;
  font-weight: bold;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

</style>