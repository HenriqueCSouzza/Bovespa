import { EntityRepository, Repository } from 'typeorm';
import Code from '../domains/Code';

@EntityRepository(Code)
class CodesRepository extends Repository<Code> {
  public async findByDate(date: Date): Promise<Code | null> {
    const findAppointmentDate = await this.findOne({
      where: { date },
    });

    return findAppointmentDate || null;
  }
}

export default CodesRepository;
