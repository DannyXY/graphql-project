import { Injectable } from '@nestjs/common';
import { CreateResourceInput } from './dto/create-resource.input';
import { UpdateResourceInput } from './dto/update-resource.input';

@Injectable()
export class ResourcesService {
    create(createResourceInput: CreateResourceInput) {
        return createResourceInput;
    }

    findAll() {
        return [
            {
                description: 'Learn Graph',
                message: 'I need to learnn Graph',
                lastName: 'Adewambe',
            },
        ]
    }

    findOne(id: number) {
        return `This action returns a #${id} resource`;
    }

    update(id: number, updateResourceInput: UpdateResourceInput) {
        return `This action updates a #${id} resource`;
    }

    remove(id: number) {
        return `This action removes a #${id} resource`;
    }
}
