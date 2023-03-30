import React, { useEffect } from "react";

function Play() {
  useEffect(() => {
    const addClass = (e) => {
      const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
      const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
    }

    const removeClass = (e) => {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeClass));
    window.addEventListener("keydown", addClass);

    keys.forEach(key => key.addEventListener("click", clickPlay));

    return () => {
      keys.forEach(key => key.removeEventListener("transitionend", removeClass));
      window.removeEventListener("keydown", addClass);
      keys.forEach(key => key.removeEventListener("click", clickPlay));
    }
  }, []);

  const clickPlay = (e) => {
    var dataKey = e.target.getAttribute("data-key");
    const audio2 = document.querySelector(`audio[data-key="${dataKey}"]`);
    audio2.currentTime = 0;
    audio2.play();

    e.target.classList.add("playing");
  }

  return (
    <div className="keys">
      <div data-key="65" className="key">
        <kbd>A</kbd>
        <span className="sound">clap</span>
      </div>
      <div data-key="83" className="key">
        <kbd>S</kbd>
        <span className="sound">hihat</span>
      </div>
      <div data-key="68" className="key">
        <kbd>D</kbd>
        <span className="sound">kick</span>
      </div>
      <div data-key="70" className="key">
        <kbd>F</kbd>
        <span className="sound">openhat</span>
      </div>
      <div data-key="71" className="key">
        <kbd>G</kbd>
        <span className="sound">boom</span>
      </div>
      <div data-key="72" className="key">
        <kbd>H</kbd>
        <span className="sound">ride</span>
      </div>
      <div data-key="74" className="key">
        <kbd>J</kbd>
        <span className="sound">snare</span>
      </div>
      <div data-key="75" className="key">
        <kbd>K</kbd>
        <span className="sound">tom</span>
      </div>
      <div data-key="76" className="key">
        <kbd>L</kbd>
        <span className="sound">tink</span>
      </div>
    </div>
  );
}

export default Play;
