enum ILootType {
  market = "MARKET",
  npc = "NPC",
}

interface IPartyMoneyData {
  loot_type: ILootType;
  loot: number;
  supplies: number;
  balance: number;
}

interface IMemberData {
  member_name: string;
  is_leader: boolean;
  loot: number;
  supplies: number;
  balance: number;
  damage: number;
  healing: number;
}

interface IPartyHunt {
  id: string;
  duration: number;
  session_start: Date;
  session_end: Date;
  party_money_data: IPartyMoneyData;
  party_info_per_member: IMemberData[];
  created_at: Date;
  updated_at: Date;
}
