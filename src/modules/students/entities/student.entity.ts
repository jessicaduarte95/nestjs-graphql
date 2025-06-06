import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  key: string;
}
