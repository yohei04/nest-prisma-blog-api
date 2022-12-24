import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { IsPublishedDto } from './dto/is-published.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';

@Controller()
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('articles')
  @ApiOperation({ summary: '記事作成' })
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get('articles')
  @ApiOperation({ summary: '記事一覧取得' })
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('user/:userId/articles')
  @ApiOperation({ summary: '特定のユーザーの記事一覧取得' })
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @ApiQuery({ name: 'published', required: false, type: Boolean })
  findAllByUserId(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() { published }: IsPublishedDto,
  ) {
    return this.articlesService.findAllByUserId({ userId, published });
  }

  @Get('articles/:id')
  @ApiOperation({ summary: '記事詳細取得' })
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.findOne(id);
  }

  @Patch('articles/:id')
  @ApiOperation({ summary: '記事編集' })
  @ApiOkResponse({ type: ArticleEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete('articles/:id')
  @ApiOperation({ summary: '記事削除' })
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.remove(id);
  }
}
