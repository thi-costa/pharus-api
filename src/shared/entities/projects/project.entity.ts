import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from '../../entities/tasks/task.entity';
import { School } from '../../entities/schools/school.entity';
import { Company } from '../../entities/companies/company.entity';
import { IsInt } from 'class-validator';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: '255' })
  name: string;

  @Column({ name: 'is_complete' })
  isComplete: boolean;

  @Column()
  @IsInt()
  score: number;

  @Column()
  medal: MedalTypes;

  @Column({ length: '255' })
  description: string;

  @Column({ length: '255', name: 'score_description' })
  scoreDescription: string;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;

  @Column({ length: '255' })
  rules: string;

  @Column({ length: '255', name: 'mentor_name' })
  mentorName: string;

  @Column({ name: 'has_company_partnership' })
  hasCompanyPartnership: boolean;

  @Column({ length: '255', name: 'company_photo' })
  companyPhoto: string;

  @Column({ name: 'completion_status' })
  completionStatus: string;

  @OneToMany(() => Task, (tasks) => tasks.project, { eager: true })
  tasks: Task[];

  @ManyToOne(() => Company, (company) => company.projects)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => School, (school) => school.projects)
  @JoinColumn({ name: 'school_id' })
  school: School;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

enum MedalTypes {
  DIAMOND = 'diamond',
  RUBY = 'ruby',
  EMERALD = 'emerald',
  SAPHIRE = 'saphire',
  PLATINUM = 'platinum',
  GOLD = 'gold',
  SILVER = 'silver',
  BRONZE = 'bronze',
}
