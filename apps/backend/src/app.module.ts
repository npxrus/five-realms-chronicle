import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PostsController } from "./posts/posts.controller";
import { PostService } from "./posts/posts.service";

@Module({
  controllers: [PostsController],
  providers: [PrismaService, PostService],
})
export class AppModule {}
