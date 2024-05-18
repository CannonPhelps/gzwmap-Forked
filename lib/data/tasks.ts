import { task } from "@/lib/types";

import { FirstRecon }                     from "@/lib/data/tasks/first-recon";
import { CacheRetrieval }                 from "@/lib/data/tasks/cache-retrieval";
import { MedsWanted }                     from "@/lib/data/tasks/meds-wanted";
import { LeaveNoManBehind }               from "@/lib/data/tasks/leave-no-man-behind";
import { LittleBirdDown }                 from "@/lib/data/tasks/little-bird-down";
import { RestoringOrder }                 from "@/lib/data/tasks/restoring-order";
import { RatsNest }                       from "@/lib/data/tasks/rats-nest";
import { LostAndFound }                   from "@/lib/data/tasks/lost-and-found";
import { MedicalDetective }               from "@/lib/data/tasks/medical-detective";
import { HelpingHand }                    from "@/lib/data/tasks/helping-hand";
import { SecretCompassion }               from "@/lib/data/tasks/secret-compassion";
import { RadioSilence }                   from "@/lib/data/tasks/radio-silence";
import { Reclamation }                    from "@/lib/data/tasks/reclamation";
import { FirstHit }                       from "@/lib/data/tasks/first-hit";
import { NativeNegotiations }             from "@/lib/data/tasks/native-negotiations";
import { CovertResearch }                 from "@/lib/data/tasks/covert-research";
import { ToolsOfTheTrade }                from "@/lib/data/tasks/tools-of-the-trade";
import { LastFarewell }                   from "@/lib/data/tasks/last-farewell";
import { LeftBehind }                     from "@/lib/data/tasks/left-behind";
import { LastFlight }                     from "@/lib/data/tasks/last-flight";
import { ASingleDrop }                    from "@/lib/data/tasks/a-single-drop";
import { SkycrawlersPartOne }             from "@/lib/data/tasks/skycrawlers-part-1";
import { SkycrawlersPartTwo }             from "@/lib/data/tasks/skycrawlers-part-2";
import { WingClipping }                   from "@/lib/data/tasks/wing-clipping";
import { BusinessOrPleasure }             from "@/lib/data/tasks/business-or-pleasure";
import { FinalCheckout }                  from "@/lib/data/tasks/final-checkout"
import { ManifestDestiny }                from "@/lib/data/tasks/manifest-destiny"
import { AtTheMoundsOfMadness }           from "@/lib/data/tasks/at-the-mounds-of-madness"
import { ItsInTheWaterPartOne }           from "@/lib/data/tasks/its-in-the-water-part-1"
import { ItsInTheWaterPartTwo }           from "@/lib/data/tasks/its-in-the-water-part-2"
import {TheShadowOverBanPaPartOne}        from "@/lib/data/tasks/the-shadow-over-ban-pa-part-1"
import {TheShadowOverBanPaPartTwo}        from "@/lib/data/tasks/the-shadow-over-ban-pa-part-2"
import { LineInTheSand }                  from "@/lib/data/tasks/line-in-the-sand"
import { TheValueOfSharing }              from "@/lib/data/tasks/the-value-of-sharing"
import { UninvitedGuests }                from "@/lib/data/tasks/uninvited-guests"
import { WarmWelcome }                    from "@/lib/data/tasks/warm-welcome"
import { LamangConnection }               from "@/lib/data/tasks/lamang-connection"
import { TheMostDangerousGame }           from "@/lib/data/tasks/the-most-dangerous-game";
import { OnTheRange }                     from "@/lib/data/tasks/on-the-range";
import { GunsAndAmmo }                    from "@/lib/data/tasks/guns-and-ammo";
import { ShootingGallery }                from "@/lib/data/tasks/shooting-gallery";
import { TrueGrit }                       from "@/lib/data/tasks/true-grit";
import { OneShotOneKill }                 from "@/lib/data/tasks/one-shot-one-kill";
import { TheBrave }                       from "@/lib/data/tasks/the-brave";
import { Carnivore }                      from "@/lib/data/tasks/carnivore";
import { UpToSnuff }                      from "@/lib/data/tasks/up-to-snuff";
import { IWentISawIConqueredPartOne }     from "@/lib/data/tasks/i-went-i-saw-i-conquered-part-1";
import { IWentISawIConqueredPartTwo }     from "@/lib/data/tasks/i-went-i-saw-i-conquered-part-2";
import { IWentISawIConqueredPartThree }   from "@/lib/data/tasks/i-went-i-saw-i-conquered-part-3";
import { InvadersFromAfar }               from "@/lib/data/tasks/invaders-from-afar";
import { Timber }                         from "@/lib/data/tasks/timber";
import { FuelShortage }                   from "@/lib/data/tasks/fuel-shortage";
import { EOD }                            from "@/lib/data/tasks/eod";
import { HazardousTreasures }             from "@/lib/data/tasks/hazardous-treasures";
import { NightOcean }                     from "@/lib/data/tasks/night-ocean";
import { DeepWaters }                     from "@/lib/data/tasks/deep-waters";
import { FreshMeatPartOne }               from "@/lib/data/tasks/fresh-meat-part-1";
import { FreshMeatPartTwo }               from "@/lib/data/tasks/fresh-meat-part-2";
import { FreshMeatPartThree }             from "@/lib/data/tasks/fresh-meat-part-3";
import { WhatWasLeft }                    from "@/lib/data/tasks/what-was-left";
import { OutOfTheBlue }                   from "@/lib/data/tasks/out-of-the-blue";
import { JetNMark }                       from "@/lib/data/tasks/jets-n-marks";
import { HackerPartOne }                  from "@/lib/data/tasks/hacker-part-1";
import { HackerPartTwo }                  from "@/lib/data/tasks/hacker-part-2";
import { ForthNarithStroll }              from "@/lib/data/tasks/forth-narith-stroll";
import { NeighbourlyHelp }                from "@/lib/data/tasks/neighbourly-help";
import { FamilyHeirloom }                 from "@/lib/data/tasks/family-heirloom";
import { MissingColleaguePartOne }        from "@/lib/data/tasks/missing-colleague-part-1";
import { MissingColleaguePartTwo }        from "@/lib/data/tasks/missing-colleague-part-2";
import { LostLover }                      from "@/lib/data/tasks/lost-lover";

export const Tasks: task[] = [
  FirstRecon,
  CacheRetrieval,
  MedsWanted,
  LeaveNoManBehind,
  LittleBirdDown,
  RestoringOrder,
  RatsNest,
  LostAndFound,
  MedicalDetective,
  HelpingHand,
  SecretCompassion,
  RadioSilence,
  Reclamation,
  FirstHit,
  NativeNegotiations,
  CovertResearch,
  ToolsOfTheTrade,
  LastFarewell,
  LeftBehind,
  LastFlight,
  ASingleDrop,
  SkycrawlersPartOne,
  SkycrawlersPartTwo,
  WingClipping,
  BusinessOrPleasure,
  FinalCheckout,
  ManifestDestiny,
  AtTheMoundsOfMadness,
  ItsInTheWaterPartOne,
  ItsInTheWaterPartTwo,
  TheShadowOverBanPaPartOne,
  TheShadowOverBanPaPartTwo,
  LineInTheSand,
  TheValueOfSharing,
  UninvitedGuests,
  WarmWelcome,
  LamangConnection,
  TheMostDangerousGame,
  OnTheRange,
  GunsAndAmmo,
  ShootingGallery,
  TrueGrit,
  OneShotOneKill,
  TheBrave,
  Carnivore,
  UpToSnuff,
  IWentISawIConqueredPartOne,
  IWentISawIConqueredPartTwo,
  IWentISawIConqueredPartThree,
  InvadersFromAfar,
  Timber,
  FuelShortage,
  EOD,
  HazardousTreasures,
  NightOcean,
  DeepWaters,
  FreshMeatPartOne,
  FreshMeatPartTwo,
  FreshMeatPartThree,
  WhatWasLeft,
  OutOfTheBlue,
  JetNMark,
  HackerPartOne,
  HackerPartTwo,
  ForthNarithStroll,
  NeighbourlyHelp,
  FamilyHeirloom,
  MissingColleaguePartOne,
  MissingColleaguePartTwo,
  LostLover,
]