# Questions For Projects

## Contents <!-- omit in toc -->

- [The Questions](#the-questions)
  - [How do you make an element flash then wait a few seconds then have another element flash](#how-do-you-make-an-element-flash-then-wait-a-few-seconds-then-have-another-element-flash)
  - [How do you use JS to write temporary text to the document](#how-do-you-use-js-to-write-temporary-text-to-the-document)
  - [What order does the browser run the JavaScript in](#what-order-does-the-browser-run-the-javascript-in)
  - [How to get user input in HTML, into JavaScript, and then produce an output](#how-to-get-user-input-in-html-into-javascript-and-then-produce-an-output)
  - [How does `jQuery.css(...)` work?](#how-does-jquerycss-work)
  - [How to write a JavaScript function that produces a random color](#how-to-write-a-javascript-function-that-produces-a-random-color)
  - [How do you reference the colored squares in JavaScript and manipulate them](#how-do-you-reference-the-colored-squares-in-javascript-and-manipulate-them)
  - [How do you use JavaScript to add/remove classes from elements](#how-do-you-use-javascript-to-addremove-classes-from-elements)

## The Questions

### How do you make an element flash then wait a few seconds then have another element flash

You can't "wait" in JavaScript (at least in the browser).

- `setTimeout` - Tells the browser to run a snippet of JavaScript some fixed time in the future
- `setInterval` - Tells the browser to run a snippet of JavaScript periodically every specified interval

### How do you use JS to write temporary text to the document

```javascript
$('#output').text('Hello, world');
```

### What order does the browser run the JavaScript in

Same order, top down, left right.

When you use a `<script>` tag, it's as if you copy + pasted the referenced file into the HTML file at that point.

```html
<script>
alert('Hello, world!');
</script>

<script src="hello.js">
```

### How to get user input in HTML, into JavaScript, and then produce an output

- Listening to events like `click`
- Using a `<form>` tag that contains `<input>` tags and then using JavaScript to read the text from the input tags.

### How does `jQuery.css(...)` work?

1. Look up the official documentation on jquery.org!

```html
<div id="green-button">
  This better be green!
</div>
```

```javascript
$('#green-button').css({
  'color': 'purple',
  'height': '100px',
  'background-color': 'green',
});
```

### How to write a JavaScript function that produces a random color

<https://github.com/jfarmer/examples-javascript/blob/master/examples/random.js>

- How do HTML, CSS, and JavaScript all work together / interact?

```css
a:hover {
  text-decoration: underline;
}
```

### How do you reference the colored squares in JavaScript and manipulate them

```javascript
$('.simon-button.green').animate({
  opacity: .5,
  height: "50%"
});

$('.simon-button').css({
  'animation': '.....'
})
```

### How do you use JavaScript to add/remove classes from elements

- https://api.jquery.com/addClass/
- https://api.jquery.com/removeClass/
- https://api.jquery.com/toggleClass/
- https://api.jquery.com/hasClass/

```javascript
$('.simon-button.green').addClass('hello');
$('.simon-button.green').removeClass('hello');
```
