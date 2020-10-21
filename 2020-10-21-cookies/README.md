# Session: HTTP Cookies

## Wednesday, October 21, 2020 <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [HTTP Requests and Responses](#http-requests-and-responses)
- [YouTube Video](#youtube-video)
- [Tools](#tools)
- [Cookies](#cookies)
- [Reading And Writing Cookies w/ Express](#reading-and-writing-cookies-w-express)

## HTTP Requests and Responses

Every HTTP interaction has two parts:

1. An incoming **HTTP message** called the *request*
1. A return **HTTP message** called the *response*

A *request* consists of three sections:

1. A request line, which indicates what document is being requested
1. Zero or more headers that contain extra information about the request
1. A request body (which is often empty unless you're doing something like uploading a file)

A *response* consists of three sesions:

1. A status line, which indicates things like whether the request was valid, whether the document requested is missing, etc.
1. Zero or more headers that contain extra information about the repsonse
1. A response body, which usually contains HTML for the browser to render

## YouTube Video

See <https://www.youtube.com/watch?v=Zotrz-JlK6Q>

## Tools

You can use the `curl` command to make raw HTTP requests. Try it:

```console
curl -v http://localhost:3000
```

This will show you all the request and response data.

## Cookies

"Cookies" are transmitted via request and response headers. The server can include a `Set-Cookie` header, which is a signal that the client should send back that same data on all future requests.

The client does this by saving the data from `Set-Cookie` somewhere (a file on your computer, typically) and then including a `Cookie` header in the response.

## Reading And Writing Cookies w/ Express

See `app.js`, specifically the `/cookie-test` endpoint.

These are the lines that let Express manipulate cookies:

```js
// cookieParser for regular cookies
let cookieParser = require('cookie-parser');
app.use(cookieParser());
```
