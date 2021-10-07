import { Module } from '@nestjs/common';
import { SchoolarityTypeService } from './schoolarity-type.service';
import { SchoolarityTypeController } from './schoolarity-type.controller';
import { SchoolarityType } from './entities/schoolarity-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolarityType])],
  controllers: [SchoolarityTypeController],
  providers: [SchoolarityTypeService]
})
export class SchoolarityTypeModule {}
