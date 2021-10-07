import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolarityTypeService } from './schoolarity-type.service';
import { CreateSchoolarityTypeDto } from './dto/create-schoolarity-type.dto';
import { UpdateSchoolarityTypeDto } from './dto/update-schoolarity-type.dto';

@Controller('schoolarity-type')
export class SchoolarityTypeController {
  constructor(private readonly schoolarityTypeService: SchoolarityTypeService) {}

  @Post()
  create(@Body() createSchoolarityTypeDto: CreateSchoolarityTypeDto) {
    return this.schoolarityTypeService.create(createSchoolarityTypeDto);
  }

  @Get()
  findAll() {
    return this.schoolarityTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolarityTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolarityTypeDto: UpdateSchoolarityTypeDto) {
    return this.schoolarityTypeService.update(+id, updateSchoolarityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolarityTypeService.remove(+id);
  }
}
