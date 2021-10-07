import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { Profession } from './entities/profession.entity';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectRepository(Profession) private professionRepository: Repository<Profession>
  ){}

  create(createProfessionDto: CreateProfessionDto) {
    return this.professionRepository.save(createProfessionDto);
  }

  findAll() {
    return `This action returns all profession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profession`;
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return `This action updates a #${id} profession`;
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }
}
