import { PartyHuntAnalyzerMapper } from "./PartyHuntAnalyzerMapper";

const testOutput = `Session data: From 2022-12-02, 23:43:46 to 2022-12-02, 23:45:32
Session: 00:01h
Loot Type: Market
Loot: 0
Supplies: 0
Balance: 0
General Bejamin Arrola
    Loot: 0
    Supplies: 0
    Balance: 0
    Damage: 30
    Healing: 0
Myke Okslonng (Leader)
    Loot: 0
    Supplies: 0
    Balance: 0
    Damage: 30
    Healing: 0`;

let partyHuntAnalyzerMapper: PartyHuntAnalyzerMapper;

describe("PartyHuntAnalyzerMapper", () => {
  beforeEach(() => {
    partyHuntAnalyzerMapper = new PartyHuntAnalyzerMapper();
  });
  it("should be able to parse the test output and return an object that follows specification", async () => {
    const mappedPartyHunt = partyHuntAnalyzerMapper.map(testOutput);

    console.log(JSON.stringify(mappedPartyHunt));

    expect(mappedPartyHunt).toEqual({
      session_start: 1670035426000,
      session_end: 1670035532000,
      duration: 60000,
      party_money_data: {
        balance: 0,
        loot: 0,
        loot_type: "market",
        supplies: 0,
      },
      party_info_per_member: [
        {
          member_name: "General Bejamin Arrola",
          balance: 0,
          damage: 30,
          healing: 0,
          is_leader: false,
          loot: 0,
          supplies: 0,
        },
        {
          member_name: "Myke Okslonng",
          balance: 0,
          damage: 30,
          healing: 0,
          is_leader: true,
          loot: 0,
          supplies: 0,
        },
      ],
    });
  });
});
