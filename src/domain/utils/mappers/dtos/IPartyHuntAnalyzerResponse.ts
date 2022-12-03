export enum ILootType {
  market = "MARKET",
  npc = "NPC",
}

export interface IPartyMoneyData {
  loot_type: ILootType;
  loot: number;
  supplies: number;
  balance: number;
}

export interface IMemberData {
  member_name: string;
  is_leader: boolean;
  loot: number;
  supplies: number;
  balance: number;
  damage: number;
  healing: number;
}

export interface IMappedPartyHunt {
  duration: number;
  session_start: Date;
  session_end: Date;
  party_money_data: IPartyMoneyData;
  party_info_per_member: IMemberData[];
}
