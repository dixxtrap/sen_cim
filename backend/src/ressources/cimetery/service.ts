import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cimetery } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CimeteryService {
  constructor(
    @InjectRepository(Cimetery) private repos: Repository<Cimetery>,
  ) {}
}
