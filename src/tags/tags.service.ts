import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}
  create(createTagDto: CreateTagDto) {
    return this.prisma.tag.create({ data: createTagDto });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findAllByArticleId(articleId: number) {
    return this.prisma.tag.findMany({
      where: {
        articles: {
          some: { id: articleId },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.tag.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.tag.update({
      where: { id },
      data: updateTagDto,
    });
  }

  remove(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
