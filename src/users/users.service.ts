import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }

    create(userData: Partial<User>) {
        const user = this.repo.create(userData);
        return this.repo.save(user);
    }

    findByEmail(email: string) {
        return this.repo.findOne({ where: { email } });
    }
}
