# etch-a-sketch

![etch-a-sketch-title](https://github.com/mohammednumaan/etch-a-sketch/assets/138296610/06537cc5-4a20-4ddf-b6c9-37d31b4f6ce0)

# Introduction

The main objective of this project is to create a sketch-pad and allow users to draw on it (mostly for pixel art) and provide various features that the user can use to sketch.

# Implementations

<ul>
  <li>A simple Webpage.</li>
  <li>Grids are generated using Flexbox and DOM Manipulation Concepts.</li>
  <li>Ability to change the grid-size (16x16 upto 64x64) by the User.</li>
  <li>Ability to sketch/draw on the sketch pad using a default-color (black).</li>
  <li>Ability to sketch/draw on the sketch-pad using random-rgb-variations which uses Math.random() and Math.floor() to generate random rgb-numbers.</li>
  <li>Ability to clear the sketch pad whenever the User wants to.</li>
  <li>Misc : DOM Manipulation Concepts and Flexbox Concepts have been implemented highly in this project.</li>
</ul>

# Concept Map

This is a concept-map for the logic behind generating grids based on User's input and by default as well.

![etch-a-sketch Concept Map](https://github.com/mohammednumaan/etch-a-sketch/assets/138296610/4a97cc5f-d916-42e3-b8a3-b59256c54c77)

# Features To Implement In the Future

<ul>
  <li> Slider Control - to change grid-size based on the user's input on the slider.</li>
  <li> Eraser Tool - to clear specific parts/ parts of the sketch-pad</li>
  <li> Color Picker Tool - to allow user to select specific colors to sketch, based on his/her preference.</li>
</ul>



# DOM Element Properties and Methods Used

<ul>
  <li>querySelector</li>
  <li>addEventListner</li>
  <li>elemet.innerHTML</li>
  <li>element.classList.add</li>
  <li>element.appendChild</li>
</ul>

# Disclaimer

<ul>
  <li>This project is not supported on mobile, it wasn't meant to make it responsive across platforms. The main objective of this project was to implement DOM Manipulation Properties and Methods as well as Flexbox Concepts, and NOT to make it responsive!</li>
  <li>The fonts used in this project is Summer 22 Wide Pixel by <b>Suolahti Type</b> from https://www.fontspace.com/</li>
</ul>

# Known Issues/Bugs

<ul>
  <li>Certain grid-sizes (mostly odd such as 37x37) may alter the grid for some reason, this could due to be the browser rendering values/web-page differently (just an assumption) This issues only arises in FireFox, it works perfectly fine in Chrome.</li>
</ul>

