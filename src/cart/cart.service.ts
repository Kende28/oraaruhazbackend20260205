import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor (private prisma: PrismaService){}
  create(createCartDto: CreateCartDto, id: number) {
    const now = new Date
    return this.prisma.cart.create({data: {watch_id: id, quantity: createCartDto.quantity, added_at: now}, select: {id: true, quantity: true, added_at: true}});
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
