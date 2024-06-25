import {createServer} from "http";
import {createTransport} from "nodemailer";
import {parse} from "querystring";

const server = createServer((request, response) => {
    if (request.method === "POST") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString();
        });
        request.on("end", () => {
            const {email, subject, message} = parse(body);

            const auth = createTransport({
                service: "gmail",
                secure: true,
                port: 465,
                auth: {
                    user: "youremail@gmail.com",
                    pass: "your_password",
                },
            });

            const receiver = {
                from: "youremail@gmail.com",
                to: email,
                subject: subject,
                text: message,
            };

            auth.sendMail(receiver, (error, emailResponse) => {
                if (error) {
                    console.error(error);
                    response.writeHead(500, {"Content-Type": "application/json"});
                    response.end(JSON.stringify({status: "error", message: "Error sending email"}));
                    return;
                }
                console.log("Email sent successfully!");
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(JSON.stringify({status: "success", message: "Email sent successfully!"}));
            });
        });
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("Not Found");
    }
});

server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
