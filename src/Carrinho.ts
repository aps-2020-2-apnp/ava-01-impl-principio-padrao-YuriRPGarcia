import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []

  adiciona(...produtos: Produto[]): void {
    this.produtos.push(...produtos)
  }

  toString(): string {
    return 'Conteúdo do Carrinho:\n' +
      '=====================\n' +
      this.produtos.join('\n') // junta os produtos separados por nova linha
  }
}
