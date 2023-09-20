import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SectionService {
  constructor(@InjectRepository(Section) private repos: Repository<Section>) {}
}
