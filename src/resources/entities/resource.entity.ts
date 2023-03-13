import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Resource {
    @Field({ description: 'Task name' })
    description: string;

    @Field({ description: 'Task name', nullable: true })
    firstName: string;

    @Field({ description: 'Task name', nullable: true })
    lastName: string;

    @Field({ description: 'Task name' })
    message: string;
}
