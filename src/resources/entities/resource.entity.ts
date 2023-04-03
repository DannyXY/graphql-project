import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Resource {
    @Field({ description: 'Resource Description' })
    description: string;

    @Field({ description: 'First name', nullable: true })
    firstName: string;

    @Field({ description: 'Last name', nullable: true })
    lastName: string;

    @Field({ description: 'Message' })
    message: string;
}
