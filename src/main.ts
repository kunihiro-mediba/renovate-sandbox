import { createServer, IncomingMessage, ServerResponse } from "node:http";

function requestListener(req: IncomingMessage, res: ServerResponse) {
    const { method, url } = req;
    console.log(`${new Date().toISOString()} ${method} ${url}`);
    res.writeHead(200, "OK", { "Content-Type": "text/plain;charset=UTF-8" }).write("OK", () => {
        res.end();
    });
}

(async () => {
    const server = createServer(requestListener);
    server.listen(8080);
})();
