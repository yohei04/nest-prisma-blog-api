import { PrismaModule } from 'src/prisma/prisma.module';

import { Module } from '@nestjs/common';

import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}
