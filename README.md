# ResponsiveStarter
a starter template for a responsive, angular, typescript website. 

## Install 
After cloning run the following in this order
`npm install`
`bower install`

2 gulp tasks 
to compile typescript to javascript
`gulp compile-ts`

finally to start the Node server and browsersync
`gulp start-dev`

## Features
I'm still fairly new to web development workflows and wanted a starter template for some of the technologies I've been learning including
* angularjs
* typescript
* gulp
* angular-ui-router
* responsive hamburger menu for smaller screens

### ShrinkNav.ts
An angularjs directive that shrinks the top navigation bar from 50px to 35px when scrolling goes beyond a certain height (50px)
If your navigation bar is a different height say 100px simply change the shrinkHeight 
eg <header role="banner" class="header" **shrink-nav shrink-height="50"**>

## Notes & further development
Bootstrap could easily be added to expand on content flow especially in the footer. The reason I didn't use it for this template is 
that I wanted a full screen navigation page when the hamburger is clicked. 

I have included the *typescript definition files* but probably should move that job to gulp for leaness
