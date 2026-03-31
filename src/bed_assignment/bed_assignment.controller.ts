import { Controller } from '@nestjs/common';
import { BedAssignmentService } from './bed_assignment.service';

@Controller('bed-assignment')
export class BedAssignmentController {
  constructor(private readonly bedAssignmentService: BedAssignmentService) {}
}
