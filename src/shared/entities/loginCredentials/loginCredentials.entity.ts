import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  IsNull,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { School } from '../schools/school.entity';
import { Company } from '../companies/company.entity';
import { Student } from '../students/student.entity';

@Entity({ name: 'login_credentials' })
export class LoginCredential {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: '255', unique: true })
  username: string;

  @Column({ length: '255' })
  password: string;

  @OneToOne(() => School)
  @JoinColumn({ name: 'school_id' })
  school: School;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @OneToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
