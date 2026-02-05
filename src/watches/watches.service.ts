import { Injectable } from '@nestjs/common';
import { CreateWatchDto } from './dto/create-watch.dto';
import { UpdateWatchDto } from './dto/update-watch.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WatchesService {
  constructor(private prisma:PrismaService){}
  create(createWatchDto: CreateWatchDto) {
    return this.prisma.watches.create({data: createWatchDto});
  }

  findAll() {
    return this.prisma.watches.findMany({select: {id: true, brand: true, model: true, movement_type: true, price: true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} watch`;
  }

  update(id: number, updateWatchDto: UpdateWatchDto) {
    return `This action updates a #${id} watch`;
  }

  remove(id: number) {
    return `This action removes a #${id} watch`;
  }
}
