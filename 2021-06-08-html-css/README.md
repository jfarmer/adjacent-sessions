# Session Notes: HTML and CSS

**Date**: Tuesday, June 8, 2021

<!-- omit in toc -->
## Contents

- [Files](#files)
- [Loading CSS - style vs link](#loading-css---style-vs-link)
- [Structure of CSS](#structure-of-css)
- [The Class Attribute](#the-class-attribute)

## Files

See `index.html`, `hello.html`, and `main.css`.

Live version at <https://jesse-session-2021-06-08.surge.sh>

## Loading CSS - style vs link

There are two ways of including CSS in page: the `<style>` tag and the `<link>` tag.

CSS included via the `<style>` tag is called an *internal stylesheet*. CSS included via the `<link>` tag is called an *external stylesheet*.

First, we can use the `<style>` tag, like this:

```html
<html>
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello, world.</h1>
  </body>
</html>
```

The `<style>` tag makes it hard to use the same style in multiple HTML documents. Sure, you can copy and paste the `<style>` tag, but what happens if you want to make every `h1` tag blue instead of red?

If you have 10 HTML documents, you'll need to change it in 10 places. That's both tedious and error-prone.

The second way is using the `<link>` tag. Here's what that looks like:

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <h1>Hello, world.</h1>
  </body>
</html>
```

With the `<link>` tag, you keep your CSS in a single file, e.g., `main.css` or `page.css`. The file can have any name, but it must end in `.css`.

In the above example we use `main.css`.

Then you use the `<link>` tag to tell the browser to download `main.css` and use the styles inside.

The contents of `main.css` would be whatever you'd otherwise put inside the `<style> tag`. In this case, the contents of `main.css` would be:

```css
h1 {
  color: red
}
```

## Structure of CSS

CSS is all about selecting different elements in an HTML document and applying styles to the selected elements.

A CSS *rule* tells the browser: "Select the following elements and apply the following styles to them."

A CSS rule looks like this:

```css
h1 {
  color: red;
  text-decoration: underline;
}
```

A *rule* has two parts: a *selector* and a *declaration block* (often called the body).

Here `h1` is the *selector* and everything between the `{ ... }` is the declaration block.

The selector tells the browser what element to select. Here `h1` means "Select every `<h1>` tag on the page."

The declaration block tells the browser what styles fo apply. Here we're telling the browser to make the text red and underlined.

The individual lines in the declaration block — `color: red` and `text-decoration: underline` — are called *declarations*. These are the individual styles we want to apply.

## The Class Attribute

It's rare we want a style to apply to *every* `<h1>` tag. We can use the HTML `class` attribute to label specific instances of a tag and apply the same style to all of them.

For example:

```html
<h1>Hello, world.</h1>
<h1 class="potato">Potatoes are great.</h1>
```

And in the CSS:

```css
h1 {
  color: red;
}

h1.potato {
  color: purple;
  text-decoration: underline;
}
```

`h1 { ... }` selects *every* `<h1>` tag on the page.

`h1.potato { ... }` selects every `<h1>` tag with `class="potato"`.

Check out `index.html` and `main.css` to see more examples.
