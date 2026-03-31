import { Controller } from '@nestjs/common';
import { AttendingService } from './attending.service';

@Controller('attending')
export class AttendingController {
  constructor(private readonly attendingService: AttendingService) {}
}
