import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Contact from "./contacts.entity";
import User from "./user.entity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  linkedin: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.clients, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}

export default Client;
