"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DATA TRANSFER OBJECT (DDD)
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject} `);
    }
}
exports.default = EmailService;
