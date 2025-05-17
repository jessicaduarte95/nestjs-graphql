import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  name: string;

  @Column()
  key: string;
}
