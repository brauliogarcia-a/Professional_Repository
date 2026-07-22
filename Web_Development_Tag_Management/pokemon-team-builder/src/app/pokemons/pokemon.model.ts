export class Pokemon {
  constructor(
    public id: string,
    public name: string,
    public type1: string,
    public type2: string,
    public level: number,
    public ability: string,
    public description: string,
    public imageUrl: string,
    public isFavorite: boolean
  ) {}
}
