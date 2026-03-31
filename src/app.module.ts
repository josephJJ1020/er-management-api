import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [PatientsModule, RecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
