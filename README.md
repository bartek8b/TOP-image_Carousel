### 🎡 Adjustable image carousel

Simple image carousel with autoplay made in vanilla HTML, CSS, JavaScript.

Assgnment from [The Odin Project](https://www.theodinproject.com)'s lesson [Dynamic User Interface Interactions](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions)

### Live preview: [click!](https://bartek8b.github.io/zzz-image-carousel/)

### How to adjust

1. **Adjust HTML**

   Set images

   ```html
   <div class="tape">
       <!-- To be hardcoded -->
       <img src="" alt="" loading="lazy">
       <img src="" alt="" loading="lazy">
       <img src="" alt="" loading="lazy">
       <img src="" alt="" loading="lazy">
       <img src="" alt="" loading="lazy">
       <!-- End of To be hardcoded -->
   </div>
   ```

   Set dots (starting index = 0)

   ```html
   <div class="dots-box">
       <!-- To be hardcoded -->
       <button class="dot" data-index="0"></button>
       <button class="dot" data-index="1"></button>
       <button class="dot" data-index="2"></button>
       <button class="dot" data-index="3"></button>
       <button class="dot" data-index="4"></button>
       <!-- End of To be hardcoded -->
   </div>
   ```

2. **Adjust CSS**

   Set colors and frame dimensions

   ```css
   :root {
       --main-color: blueviolet;
       --background-color: lightgrey;
       --shadow-color: black;

       --frame-width: 300px;
       --frame-height: 400px;
       --frame-aspect-ratio: 3 / 4;
   }
   ```

3. **Adjust JavaScript**

   - Set `const imagesLength` at the top of the JS file to match the number of images/dots.

   Happy coding! 😎