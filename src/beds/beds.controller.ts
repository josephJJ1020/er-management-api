import { Controller } from '@nestjs/common';
import { BedsService } from './beds.service';

@Controller('beds')
export class BedsController {
  constructor(private readonly bedsService: BedsService) {}
}
