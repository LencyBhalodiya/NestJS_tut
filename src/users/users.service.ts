import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{
        id: 1,
        username: 'john',
        password: 'changeme',
    }]

    async findOne(username: string): Promise<any> {
        return this.users.find(user => user.username === username);
    }
}
