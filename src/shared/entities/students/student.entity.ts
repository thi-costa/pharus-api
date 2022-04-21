import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { StudentGender } from '../../../app/students/student-gender.enum';
import { SchoolShift } from '../../../app/students/student-schoolShift.enum';
import { School } from '../../../shared/entities/schools/school.entity';
import { Medal } from '../../../shared/entities/medals/medal.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', length: '255' })
  firstName: string;

  @Column({ name: 'last_name', length: '255' })
  lastName: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column()
  gender: StudentGender;

  @Column()
  phone: number;

  @Column({ name: 'school_shift' })
  schoolShift: SchoolShift;

  @Column({ length: '255' })
  avatar: string;

  @Column({ unique: true, length: '255' })
  username: string;

  @Column({ unique: true, length: '255' })
  email: string;

  @Column({ length: '255' })
  password: string;

  @Column()
  score: number;

  @OneToOne(() => Medal)
  @JoinColumn({ name: 'medal_id' })
  medal: Medal;

  @ManyToOne(() => School)
  @JoinColumn({ name: 'school_id' })
  school: School;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @BeforeInsert()
  hashedPassword() {
    this.password = hashSync(this.password, 10);
  }
}
