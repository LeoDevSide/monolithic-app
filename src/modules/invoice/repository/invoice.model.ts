import { Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { ProductModel } from './product.model'

@Table({
  tableName: 'invoices',
  timestamps: false,
})
export class InvoiceModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  id: string

  @Column({ allowNull: false })
  name: string

  @Column({ allowNull: false })
  document: string

  @Column({ allowNull: false })
  address: string

  @HasMany(() => ProductModel)
  products: ProductModel[]

  @Column({ allowNull: false })
  createdAt: Date

  @Column({ allowNull: false })
  updatedAt: Date
}
