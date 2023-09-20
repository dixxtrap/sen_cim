import { Controller } from '@nestjs/common';
import { CimeteryService } from './service';
import { ApiTags } from '@nestjs/swagger';

@Controller('cimetery')
@ApiTags('cimetery')
export class CimeteryController {
  constructor(private service: CimeteryService) {}
}
