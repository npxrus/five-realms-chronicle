import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePostDto) {
    return this.prisma.post.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  async update(id: number, dto: UpdatePostDto) {
    await this.findOne(id);

    return this.prisma.post.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.post.delete({
      where: { id },
    });
  }
}
