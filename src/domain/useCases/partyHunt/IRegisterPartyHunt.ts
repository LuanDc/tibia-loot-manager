import { IMappedPartyHunt } from "../../utils/mappers/dtos/IPartyHuntAnalyzerResponse";

export interface IRegisterPartyHunt {
  register(party_hunt_analyzer_output: string): Promise<IMappedPartyHunt>;
}
