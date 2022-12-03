export interface IPartyHuntRepository {
  get_by_id(id: string): Promise<IPartyHunt>;
}
