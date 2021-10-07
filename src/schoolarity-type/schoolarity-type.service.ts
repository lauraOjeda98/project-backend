import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolarityTypeDto } from './dto/create-schoolarity-type.dto';
import { UpdateSchoolarityTypeDto } from './dto/update-schoolarity-type.dto';
import { SchoolarityType } from './entities/schoolarity-type.entity';

@Injectable()
export class SchoolarityTypeService {
  constructor(
    @InjectRepository(SchoolarityType) private schoolarityRepository: Repository<SchoolarityType>
  ){}

  create(createSchoolarityTypeDto: CreateSchoolarityTypeDto) {
    return this.schoolarityRepository.save(createSchoolarityTypeDto);
  }

  findAll() {
    return `This action returns all schoolarityType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolarityType`;
  }

  update(id: number, updateSchoolarityTypeDto: UpdateSchoolarityTypeDto) {
    return `This action updates a #${id} schoolarityType`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolarityType`;
  }
}
