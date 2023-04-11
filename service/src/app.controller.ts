import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('app-load')
  fetchAppLoad(@Query('name') name: string): AppLoadResponseType {
    return this.appService.fetchAppLoad(name)
  }

  @Get('update-balance')
  updateBalance(@Query('name') name: string, @Query('balance') balance: number) {
    return this.appService.updateBalance(name, balance)
  }
}
