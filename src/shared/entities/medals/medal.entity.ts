import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from '../../entities/students/student.entity';
import { IsInt } from 'class-validator';

@Entity({ name: 'medals' })
export class Medal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsInt()
  diamond: number;

  @Column()
  @IsInt()
  ruby: number;

  @Column()
  @IsInt()
  emerald: number;

  @Column()
  @IsInt()
  saphire: number;

  @Column()
  @IsInt()
  platinum: number;

  @Column()
  @IsInt()
  gold: number;

  @Column()
  @IsInt()
  silver: number;

  @Column()
  @IsInt()
  bronze: number;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
