import { Controller } from '@nestjs/common';
import { RecordAttendingService } from './record_attending.service';

@Controller('record-attending')
export class RecordAttendingController {
  constructor(private readonly recordAttendingService: RecordAttendingService) {}
}
