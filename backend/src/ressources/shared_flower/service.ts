import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeceasedFlower, SharedFlower } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { SharedFlowerDto } from './dto';
import { ExceptionCode } from 'src/utils/exception_code';

@Injectable()
export class SharedFlowerService {
  constructor(
    @InjectRepository(SharedFlower) private repos: Repository<SharedFlower>,
    @InjectRepository(DeceasedFlower)
    private reposDeceasedFlower: Repository<DeceasedFlower>,
  ) {}
  async create(body: SharedFlowerDto) {
    const sharedFlower = await this.repos.save(this.repos.create(body));
    if (body.deceasedId) {
      await this.reposDeceasedFlower.save(
        this.reposDeceasedFlower.create({
          deceasedId: body.deceasedId,
          sharedFlowerId: sharedFlower.id,
        }),
      );
    }
    return ExceptionCode.SUCCEEDED;
  }
  getS() {
    return this.repos.find({
      relations: {
        flower: true,
      },
    });
  }
}
