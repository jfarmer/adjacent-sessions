# POSTing to web apps

See <https://www.youtube.com/watch?v=fQ4UMb4QFoY&list=PL_Nybj0Pic9nt_uFcVWoDQBgIYiSR7Vdy&index=7> for the recording.

## The Request / Response Cycle

See <https://medium.com/@jen_strong/the-request-response-cycle-of-the-web-1b7e206e9047>

Every HTTP request has two parts:

1. The request (from the client)
1. The response (from the server)

A client connects, sends a request, receives a response, and both sides immediately disconnect. If you want data to be available between requests, the server has to persist the data somewhere. This is typically a database.

You can use the **network tab** in Chrome's developer tools to see what requests look like. Visit any web page and open the network tab. Each line is a request. Click it and you can see the headers, body, etc.

You can use Chrome's **copy as curl** feature to get a command-line script that imitates the exact same request your browser made using `curl`. More on `curl` below.

See:

- <https://developers.google.com/web/updates/2015/05/replay-a-network-request-in-curl>
- <https://ec.haxx.se/usingcurl/usingcurl-copyas>

## URLs and Resources

It's useful to think of your web app in terms of "resources", where a "resource" represents one type of entity the client can interact with. Each "resource" has many URLs associated with it.

For example, if we're looking at a "user", we might have URLs like...

- `GET /users` — Show every user
- `GET /users/news` — Show form to create a new user
- `POST /users` — Create a new user
- `GET /users/82` — Show user with id 82
- `POST /users/82/delete` — Delete user 82
- `GET /users/82/edit` — Show the form to edit user 82
- `POST /users/82/update` — Update user 82

## Requests, Responses, and Headers

Requests and responses each contain three parts:

1. A request line
1. Headers
1. A body (possibly empty)

A request line looks like, e.g.,

```text
GET /hello.html HTTP/1.1
```

The client connects and sends the request line immediately. When you type `http://github.com/jfarmer/project-social-wall` into your browser it opens a connection to `github.com` on port `80` (the default HTTP port) and sends a request line that looks like

```console
GET /jfarmer/project-social-wall
```

It sends along other headers.

## Using `curl`

Run a web application locally and run the following command to see how it responds:

```console
curl -s -i http://localhost:3000
```

Change `3000` to whatever port the application is running on. The `-s` tells `curl` to run in "**s**ilent mode" and not display a progress bar. The `-i` tells `curl` to also **i**nclude the response headers.

If you want to see the request data, too, you can run

```console
curl -s -i -v http://localhost:3000
```

The `-v` stands for **v**erbose and tells `curl` to display lots of extra information. Lines beginning with `>` correspond to the request. Lines beginning with `<` corresponds to the response. Lines beginning with `*` are internal debugging messages from `curl`.

Use tools like `curl` and Chrome's/Firefox's developer tools to get more visibility into how the client and servers interact.
