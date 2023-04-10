import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaModule } from "./prisma/prisma.module";
import { FetchEventsModule } from "./api/fetch-events/fetch-events.module";

@Module({
  imports: [PrismaModule, FetchEventsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
