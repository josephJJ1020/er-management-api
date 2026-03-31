import { Test, TestingModule } from '@nestjs/testing';
import { AttendingController } from './attending.controller';
import { AttendingService } from './attending.service';

describe('AttendingController', () => {
  let controller: AttendingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendingController],
      providers: [AttendingService],
    }).compile();

    controller = module.get<AttendingController>(AttendingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
