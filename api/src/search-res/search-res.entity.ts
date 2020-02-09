import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SearchRes {
  
  @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    query:string;

    @Column('date') 
    created:Date;
}
