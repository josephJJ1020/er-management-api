import { Test, TestingModule } from '@nestjs/testing';
import { BedAssignmentService } from './bed_assignment.service';

describe('BedAssignmentService', () => {
  let service: BedAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BedAssignmentService],
    }).compile();

    service = module.get<BedAssignmentService>(BedAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
