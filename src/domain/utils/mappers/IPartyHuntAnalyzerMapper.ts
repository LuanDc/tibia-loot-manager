import { IMappedPartyHunt } from "./dtos/IPartyHuntAnalyzerResponse";

export interface IPartyHuntAnalyzerMapper {
  map(party_analyzer_output: string): IMappedPartyHunt;
}
