import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async findAll() {
    return await `This action returns all users`;
  }

  async findMe(id: number) {
    return await `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} user`;
  }
}
