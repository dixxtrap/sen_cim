import { Controller } from '@nestjs/common';
import { SectionService } from './service';
import { ApiTags } from '@nestjs/swagger';

@Controller('section')
@ApiTags('Section')
export class SectionController {
  constructor(private service: SectionService) {}
}
