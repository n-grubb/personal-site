import { http } from "./deps.ts";
const { serve } = http;
const port = 4242;

// Defined routes to be handled by the server.
const routes = ['/', '/stream'];

/**
 * A simple server handler.
 * @param request The request object.
 * @returns {Response}
 */
function handler(request: Request): Response {
  logRequestDetails(request);
  const url = new URL(request.url);
  const path = url.pathname;
  
  if (path === '/stream') {
    return testStreamResponse();
  }

  if (!routes.includes(path)) {
    return notFoundResponse();
  }
  return new Response("Request received.");
}

/**
 * A logging utility to print the request details to the console.
 * @param request The request object.
 */
async function logRequestDetails(request: Request): Promise<void> {
  console.log("Request received.");
  console.log("Method: ", request.method);
  const url = new URL(request.url);
  console.log("Path: ", url.pathname);
  console.log("Query parameters: ", url.searchParams);
  console.log("Headers: ", request.headers);
  if (request.body) {
    const body = await request.text();
    console.log("Body: ", body);
  }
  console.log('-------------------------------------------------------');
}

/**
 * Returns a simple 404 response.
 * @returns {Response}
 */
function notFoundResponse(): Response {
  const body = JSON.stringify({ message: 'Not found.'});
  return new Response(body, { status: 404, headers: { 'content-type': 'application/json; charset=utf-8' } });
}

/**
 * Returns a simple stream response.
 * This is just a test to understand how streams work.
 * Very cool. But I don't unsderstand how it works...
 * @returns {Response}
 */
function testStreamResponse(): Response {
  let timer: number;
  const body = new ReadableStream({
    start(controller) {
      timer = setInterval(() => {
        controller.enqueue(`${Date.now()}\n`);
      }, 1000);
    }, cancel() {
      clearInterval(timer);
    }
  });
  return new Response(
    body.pipeThrough(new TextEncoderStream()), 
    { headers: { 'content-type': 'text/plain; charset=utf-8' } }
  );
}


console.log(`Server running on http://localhost:${port}`);
await serve(handler, { port });
