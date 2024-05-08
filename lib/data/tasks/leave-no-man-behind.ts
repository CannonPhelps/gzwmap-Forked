import { ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { GPSTracker } from "@/lib/data/items";
import { CacheRetrival } from "@/lib/data/tasks/cache-retrieval";

const LeaveNoManBehind_Objective1_LRI: objective = {
  name: "Leave No Man Behind - Dead Soldier",
  description: "Locate and mark the Dead Soldier near town hall",
  position: [0.8940818432820015, -0.44516086578369146],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative
}

const LeaveNoManBehind_Objective1_MMS: objective = {
  name: "Leave No Man Behind - Dead Soldier",
  description: "Locate and mark the Dead Soldier near town hall",
  position: [0.5440668888476972, -0.7097768783569336],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems
}

const LeaveNoManBehind_Objective1_CSI: objective = {
  name: "Leave No Man Behind - Dead Soldier",
  description: "Locate and mark the Dead Soldier near town hall",
  position: [0.9085535600864155, -0.9320354461669923],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational
}


export const LeaveNoManBehind: task = {
  name: "Leave No Man Behind",
  description: "You've done the right thing. To be honest, I never liked the guy. He was too gung-ho and would always run his mouth, but that's not the point. We may have lost him in battle, but we haven't lost our sense of duty. Thanks to your efforts, his family will find solace in knowing their loved one will be returned to them, even if he was an asshole.",
  objectives: [
    LeaveNoManBehind_Objective1_LRI,
    LeaveNoManBehind_Objective1_MMS,
    LeaveNoManBehind_Objective1_CSI,
  ],
  vendor: Gunny,
  level: 0,
  prerequisites: CacheRetrival,
  items: [
    GPSTracker
  ]
}