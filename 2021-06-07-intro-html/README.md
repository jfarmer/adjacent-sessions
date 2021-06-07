# Session Notes: Intro to HTML

## Monday, June 7, 2021

Look at `index.html` for the code from today's session.

Visit <https://jesse-first-html.surge.sh> for a live version.

## Structure of HTML Documents

Use this: <https://learn.shayhowe.com/html-css/>

HTML stands for **h**yper**t**ext **m**arkup **l**anguage. Every website you visit is sending you HTML documents that your browser displays ("renders") visually.

The first distinction: the HTML code you write vs. what your browser renders.

HTML consists of many tags or elements that look like `<p>`, `<strong>`, etc. They usually come in opening and closing pairs, so a paragraph looks like:

```html
<p>This is a paragraph</p>
```

This is because the browser needs to know where a particular paragraph starts and ends. `<p>` **opens** the paragraph element and `</p>` closes it. Everything between those two is the content of the tag.

The basic structure of every HTML document is this:

```html
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Any content the user/visitor sees goes in the `<body></body>` tag. The `<head></head>` tag is for metadata, like the page title, author, language, etc.

Every webpage has exactly one `<html>` tag, exactly one `<head>` tag, and exactly one `<body>` tag.

## Changing How The Page Looks

When building a webpage, there are two dimensions:

1. Structure
1. Appearance

Your webpage's HTML is mostly about structure: sections, headers, containers, lists, paragraphs, etc.

The main way to control appearance is with CSS (**C**ascading **S**tyle **S**heets). CSS is its own language, distinct from HTML but related to it.

CSS goes inside a `<style></style>` tag and the `<style></style>` tag goes inside the `<head></head>`.

Look at:

```html
<html>
  <head>
    <style>
      h1 {
        color: blue;
      }

      p {
        color: red;
      }
    </style>
    <body>
      <h1>Cool Page</h1>
      <p>Hello, everyone</p>
    </body>
</html>
```

This tells the browser to make the text in every `h1` tag blue and the text in every `p` tag red.

How CSS and HTML interact to make the webpage look as you want is the main technical aspect of web design.
