# simple homepage with slider component

## style guide

- this mobile first react app uses two different media-queries to change layout between mobile or desktop
- for small screens, layout an *#root* div get `display:flex; flex-direction:column` to align in a collumn all contents inside him
- react map the size of screen to change a menu layou:
1. if screens width's less than 510px. tender an *mobile_menu* component, this one have an `position:absolute; top-80px` to hide him out of screen and changes into a `top:0px` to show him inside available screen; 

---

### code operation

- this app uses a many components to:
1. *header*: responsible for show a mobile_menu inside him, they render a mobile_menu and a image for menu-hamburger, and this one is responsible to change a state passed for all children by an `import React, { useContext }` called **open**, changing their value to *false* or *true* to show or hide a menu_mobile inside header;

2. *menu_mobile*: responsible to render an *ol* list with menu links

3. *arrow_buttons*: responsible to render two buttons with arrow images (left and right directions), this component gets a state received from `import React, { useContext }` called *count* and *setCount*, these states values changes between 0 and 2, depending value, the image inside *.Slider* in *App.jsx* changes it source.

4. *button*: renders a simple button with an arrow left image, and they have no ones functionality.

5. *menuDesktop*: renders an *nav* tag with a logo image and links for menu.

6.*subtitle*: renders an *h2* and *p* tags. they values change if state *count* changes(manipulated by arrow_buttons component). the texts inside him is in an separated archieve inside `src/assets/data/Data.js`.