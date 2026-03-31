import { Test, TestingModule } from '@nestjs/testing';
import { BedAssignmentController } from './bed_assignment.controller';
import { BedAssignmentService } from './bed_assignment.service';

describe('BedAssignmentController', () => {
  let controller: BedAssignmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BedAssignmentController],
      providers: [BedAssignmentService],
    }).compile();

    controller = module.get<BedAssignmentController>(BedAssignmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
