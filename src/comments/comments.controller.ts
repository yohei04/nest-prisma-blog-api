import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Controller()
@ApiTags('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('articles/:articleId/comments')
  @ApiOperation({ summary: '特定の記事のコメント作成' })
  @ApiCreatedResponse({ type: CommentEntity })
  create(
    @Param('articleId', ParseIntPipe) articleId: number,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(articleId, createCommentDto);
  }

  @Get('articles/:articleId/comments')
  @ApiOperation({ summary: '特定の記事のコメント一覧取得' })
  @ApiOkResponse({ type: CommentEntity, isArray: true })
  findAllByArticleId(@Param('articleId', ParseIntPipe) articleId: number) {
    return this.commentsService.findAllByArticleId(articleId);
  }

  @Get('users/:userId/comments')
  @ApiOperation({ summary: '特定のユーザーのコメント一覧取得' })
  @ApiOkResponse({ type: CommentEntity, isArray: true })
  findAllByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.commentsService.findAllByUserId(userId);
  }

  @Get('comments/:id')
  @ApiOperation({ summary: 'コメント詳細取得' })
  @ApiOkResponse({ type: CommentEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.findOne(id);
  }

  @Patch('comments/:id')
  @ApiOperation({ summary: 'コメント編集' })
  @ApiOkResponse({ type: CommentEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete('comments/:id')
  @ApiOperation({ summary: 'コメント削除' })
  @ApiOkResponse({ type: CommentEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.remove(id);
  }
}
