import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create(articleId: number, createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        ...createCommentDto,
        // TODO: auth実装後に修正
        userId: 1,
        articleId,
      },
    });
  }

  findAllByArticleId(articleId: number) {
    return this.prisma.comment.findMany({
      where: { articleId },
    });
  }

  findAllByUserId(userId: number) {
    return this.prisma.comment.findMany({
      where: { userId },
    });
  }

  findOne(id: number) {
    return this.prisma.comment.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
