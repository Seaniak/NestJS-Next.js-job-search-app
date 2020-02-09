import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class SearchRes {
  
  @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    query: string;

    @Column({ length: 25 })
    location: string;

    @Column('timestamp') 
    created: Timestamp;

}
