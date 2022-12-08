import { parsePartyHunt } from "parse-tibia-analyser";

import {
  IMappedPartyHunt,
  IMemberData,
} from "../../domain/utils/mappers/dtos/IPartyHuntAnalyzerResponse";
import { IPartyHuntAnalyzerMapper } from "../../domain/utils/mappers/IPartyHuntAnalyzerMapper";

export class PartyHuntAnalyzerMapper implements IPartyHuntAnalyzerMapper {
  public map(party_analyzer_output: string): IMappedPartyHunt {
    try {
      const trimmed_party_hunt_analyzer_output = party_analyzer_output.trim();
      console.log("test")
      const {
        startedAt,
        finishedAt,
        duration,
        members,
        balance,
        loot,
        lootType,
        supplies,
      } = parsePartyHunt(trimmed_party_hunt_analyzer_output);

      const mappedMembers = Object.entries(members).map((member) => {
        const { balance, damage, healing, leader, loot, supplies } = member[1];

        const mappedMember: IMemberData = {
          member_name: member[0],
          balance,
          damage,
          healing,
          is_leader: leader,
          loot,
          supplies,
        };

        return mappedMember;
      });

      const mappedPartyHunt: IMappedPartyHunt = {
        session_start: startedAt,
        session_end: finishedAt,
        duration: duration,
        party_money_data: { balance, loot, loot_type: lootType, supplies },
        party_info_per_member: mappedMembers,
      };

      return mappedPartyHunt;
    } catch (error) {
      throw new Error(
        "Houve um erro na lib de parse, o que provavelmente significa que o formato de entrada tá zoado"
      );
    }
  }
}
