import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { FetchEventsController } from "./fetch-events.controller";
import { FetchEventsService } from "./fetch-events.service";

@Module({
  imports: [PrismaModule],
  controllers: [FetchEventsController],
  providers: [FetchEventsService, PrismaService],
})
export class FetchEventsModule {}
