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

import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagEntity } from './entities/tag.entity';
import { TagsService } from './tags.service';

@Controller()
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('tags')
  @ApiOperation({ summary: 'タグ作成' })
  @ApiCreatedResponse({ type: TagEntity })
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get('tags')
  @ApiOperation({ summary: 'タグ一覧取得' })
  @ApiOkResponse({ type: TagEntity, isArray: true })
  findAll() {
    return this.tagsService.findAll();
  }

  @Get('articles/:articleId/tags')
  @ApiOperation({ summary: '特定の記事のタグ一覧取得' })
  @ApiOkResponse({ type: TagEntity, isArray: true })
  findAllByArticleId(@Param('articleId', ParseIntPipe) articleId: number) {
    return this.tagsService.findAllByArticleId(articleId);
  }

  @Get('tags/:id')
  @ApiOperation({ summary: 'タグ詳細取得' })
  @ApiOkResponse({ type: TagEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.findOne(id);
  }

  @Patch('tags/:id')
  @ApiOperation({ summary: 'タグ編集' })
  @ApiOkResponse({ type: TagEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTagDto: UpdateTagDto,
  ) {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete('tags/:id')
  @ApiOperation({ summary: 'タグ削除' })
  @ApiOkResponse({ type: TagEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.remove(id);
  }
}
