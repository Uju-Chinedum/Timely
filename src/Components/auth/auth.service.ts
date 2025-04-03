import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  create(signUpDto: SignUpDto) {
    return 'This action adds a new auth';
  }
}
