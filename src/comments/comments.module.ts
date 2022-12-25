import { PrismaModule } from 'src/prisma/prisma.module';

import { Module } from '@nestjs/common';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [PrismaModule],
})
export class CommentsModule {}
