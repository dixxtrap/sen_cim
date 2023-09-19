import { Controller } from '@nestjs/common';
import { CimeteryService } from './service';

@Controller('cimetery')
export class CimeteryController {
  constructor(private service: CimeteryService) {}
}
