import { Module } from '@nestjs/common';
import { RecordAttendingService } from './record_attending.service';
import { RecordAttendingController } from './record_attending.controller';

@Module({
  controllers: [RecordAttendingController],
  providers: [RecordAttendingService],
})
export class RecordAttendingModule {}
