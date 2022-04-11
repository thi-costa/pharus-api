import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { Project } from '../../entities/projects/project.entity';

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: '255', unique: true })
  name: string;

  @Column({ length: '255' })
  address: string;

  @Column()
  phone: number;

  @Column({ length: '255', unique: true })
  username: string;

  @Column({ length: '255', unique: true })
  email: string;

  @Column({ length: '255' })
  password: string;

  @OneToMany(() => Project, (projects) => projects.company, {
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
