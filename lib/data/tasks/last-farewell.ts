import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const LastFarewell_Objective1_LRI: objective = {
  id: "",
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [22434.271907727114, 19716.16022712469],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const LastFarewell_Objective1_MMS: objective = {
  id: "",
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [15609.016458728505, 13261.125004666106],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const LastFarewell_Objective1_CSI: objective = {
  id: "",
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [11944.519831278469, 20824.900989189373],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const LastFarewell: task = {
  id: "",
  name: "Last Farewell",
  briefing: "I've got another assignment for you: Steven Clarke. He got separated from his squad during the retreat while seeking cover in a farmhouse southeast of the town's gas station. The last thing they heard on the comms was him screaming in terror and then suddendly dead silence. I need you to investigate and mark the body like before. Be extra careful on this one. I remember the guy, and he was tough as nails. No idea what happened to him to make him scream like that, so make sure the same thing doesn't happen to you. I'll provide you with a tracker right away.",
  objectives: [
    LastFarewell_Objective1_LRI,
    LastFarewell_Objective1_MMS,
    LastFarewell_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}