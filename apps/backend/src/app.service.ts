import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Five Realms Chronicle API - Backend is running!";
  }
}
