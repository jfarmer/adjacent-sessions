# Session Notes: flashing-text

## Wednesday, September 2, 2020

## Flashing Text

See `index.html` for all the code.

We use two CSS features to make text flash:

1. CSS Transitions

   Normally, changes to an element's style are reflected immediately. If something changes an element's color from red to blue, the element becomes blue instantly.

   CSS transitions allow us to control how that transition happens. For example, we tell the browser "Whenever the `color` property changes, transition it from its old value to its new value evenly over the course of 2 seconds."

   It's commonly paired with JavaScript to make interactions happen more smoothly. Your JavaScript code changes some CSS property—it can be anything, not just color—and CSS transitions make it happen smoothly.
   - <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions>
   - <https://css-tricks.com/almanac/properties/t/transition/>
2. CSS Animations

   CSS Animations allow us to define fully-featured animations directly in CSS. The core concept is that of the [key frame](https://en.wikipedia.org/wiki/Key_frame), which comes from animation. We use the `@keyframes` CSS directive to define the keyframes.

   There are the "sign posts" of the animation. The computer transitions smoothly from one keyframe to the next, but we define the keyframes.

   We then tell the browser to apply the animation to a specific element and include other information, e.g., how long the animation should last, how many times the animation should repeat, how the animation should transition between keyframes, etc.

   - <https://thoughtbot.com/blog/css-animation-for-beginners>
   - <https://marksheet.io/css-animations.html>
   - <https://developer.mozilla.org/en-US/docs/Web/CSS/animation>
