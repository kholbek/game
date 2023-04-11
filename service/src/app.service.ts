import { Injectable } from '@nestjs/common';
import users from './data/users'

const messages: string[] = ['hi guys', 'Hiiiiiiii men',  'I could play this game for hours!']

@Injectable()
export class AppService {
  private _cache: { [key: string]: number } = {};

  private getUsers(): UserType[] {
    return Array.from({ length: 4 }).map(() => ({
      name: users[Math.floor(Math.random() * 900)],
      multiplier: (Math.random() * 10).toFixed(2),
      point: (Math.random() * 900 + 10).toFixed(0)
    }))
  }
  getHello(): string {
    return 'Hello World!';
  }
  fetchAppLoad(name: string): AppLoadResponseType {
    const users = this.getUsers()
    return {
      name,
      balance: this._cache[name] || 1000,
      users,
      chats: messages.map((message, index) => ({
        message,
        sender: users[index].name,
      }))
    }
  }
  updateBalance(name: string, amount: number) {
    this._cache[name] = amount;
    return `Updated: ${name}: ${this._cache[name]}`
  }
}
