import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateResourceInput {
    @Field({ description: 'Task Description' })
    description: string;

    @Field({ description: 'Task name', nullable: true })
    firstName: string;

    @Field({ description: 'Task name', nullable: true })
    lastName: string;

    @Field({ description: 'Task name' })
    message: string;
}
