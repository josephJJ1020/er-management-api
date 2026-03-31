import { Module } from '@nestjs/common';
import { BedAssignmentService } from './bed_assignment.service';
import { BedAssignmentController } from './bed_assignment.controller';

@Module({
  controllers: [BedAssignmentController],
  providers: [BedAssignmentService],
})
export class BedAssignmentModule {}
