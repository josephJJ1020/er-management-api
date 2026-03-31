import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { RecordsModule } from './records/records.module';
import { AttendingModule } from './attending/attending.module';
import { RecordAttendingModule } from './record_attending/record_attending.module';

@Module({
  imports: [PatientsModule, RecordsModule, AttendingModule, RecordAttendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
