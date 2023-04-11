"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const users_1 = require("./data/users");
const messages = ['hi guys', 'Hiiiiiiii men', 'I could play this game for hours!'];
let AppService = class AppService {
    constructor() {
        this._cache = {};
    }
    getUsers() {
        return Array.from({ length: 4 }).map(() => ({
            name: users_1.default[Math.floor(Math.random() * 900)],
            multiplier: (Math.random() * 10).toFixed(2),
            point: (Math.random() * 900 + 10).toFixed(0)
        }));
    }
    getHello() {
        return 'Hello World!';
    }
    fetchAppLoad(name) {
        const users = this.getUsers();
        return {
            name,
            balance: this._cache[name] || 1000,
            users,
            chats: messages.map((message, index) => ({
                message,
                sender: users[index].name,
            }))
        };
    }
    updateBalance(name, amount) {
        this._cache[name] = amount;
        return `Updated: ${name}: ${this._cache[name]}`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map