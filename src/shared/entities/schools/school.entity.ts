import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { Student } from '../../entities/students/student.entity';
import { Project } from '../../entities/projects/project.entity';
import { IsInt } from 'class-validator';

@Entity({ name: 'schools' })
export class School {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: '255', unique: true })
  name: string;

  @Column({ length: '255' })
  address: string;

  @Column()
  @IsInt()
  phone: number;

  @Column({ length: '255', unique: true })
  username: string;

  @Column({ length: '255', unique: true })
  email: string;

  @Column({ length: '255' })
  password: string;

  @OneToMany(() => Student, (students) => students.school, {
    eager: true,
  })
  students: Student[];

  @OneToMany(() => Project, (projects) => projects.school, {
    eager: true,
  })
  projects: Project[];

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
