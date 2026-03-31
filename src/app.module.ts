import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { RecordsModule } from './records/records.module';
import { AttendingModule } from './attending/attending.module';
import { RecordAttendingModule } from './record_attending/record_attending.module';
import { BedsModule } from './beds/beds.module';
import { RoomsModule } from './rooms/rooms.module';
import { BedAssignmentModule } from './bed_assignment/bed_assignment.module';
import { TasksModule } from './tasks/tasks.module';
import { LogsModule } from './logs/logs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PatientsModule, RecordsModule, AttendingModule, RecordAttendingModule, BedsModule, RoomsModule, BedAssignmentModule, TasksModule, LogsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
