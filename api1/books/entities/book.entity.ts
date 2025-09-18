import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  isbn: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  pages: number;
}
