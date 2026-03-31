import { Test, TestingModule } from '@nestjs/testing';
import { RecordAttendingController } from './record_attending.controller';
import { RecordAttendingService } from './record_attending.service';

describe('RecordAttendingController', () => {
  let controller: RecordAttendingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordAttendingController],
      providers: [RecordAttendingService],
    }).compile();

    controller = module.get<RecordAttendingController>(RecordAttendingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
