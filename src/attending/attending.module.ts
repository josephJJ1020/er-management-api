import { Module } from '@nestjs/common';
import { AttendingService } from './attending.service';
import { AttendingController } from './attending.controller';

@Module({
  controllers: [AttendingController],
  providers: [AttendingService],
})
export class AttendingModule {}
