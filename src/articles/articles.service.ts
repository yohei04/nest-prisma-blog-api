import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: {
        ...createArticleDto,
        // TODO: auth実装後に修正
        userId: 1,
      },
    });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findAllByUserId({
    userId,
    published,
  }: {
    userId: number;
    published?: boolean;
  }) {
    return this.prisma.article.findMany({
      where: {
        userId,
        published,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
