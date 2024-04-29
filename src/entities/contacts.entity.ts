import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import Client from './clients.entity'

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telephone: string

    @Column()
    linkedin: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Client, (client) => client.contacts, {onDelete: 'CASCADE'})
    client: Client
}

export default Contact