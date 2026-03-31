import { Test, TestingModule } from '@nestjs/testing';
import { RecordAttendingService } from './record_attending.service';

describe('RecordAttendingService', () => {
  let service: RecordAttendingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordAttendingService],
    }).compile();

    service = module.get<RecordAttendingService>(RecordAttendingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
