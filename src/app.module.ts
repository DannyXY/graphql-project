import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResourcesModule } from './resources/resources.module';
import { ResourcesResolver } from './resources/resources.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            autoSchemaFile: true,
        }),
        ResourcesModule,
    ],
})
export class AppModule {}
