/* eslint-disable global-require */
import React from 'react';
import AdultPregnancy from './icons/AdultPregnancy';
import Akne from './icons/Akne';
import Allergi from './icons/Allergi';
import Andningsbesvar from './icons/Andningsbesvar';
import BarnAkne from './icons/BarnAkne';
import BarnBorrelia from './icons/BarnBorrelia';
import BarnDiarreOchKrakningar from './icons/BarnDiarreOchKrakningar';
import BarnEksem from './icons/BarnEksem';
import BarnForstoppning from './icons/BarnForstoppning';
import BarnInsektsbett from './icons/BarnInsektsbett';
import BarnKladaIRumpan from './icons/BarnKladaIRumpan';
import BarnOgoninflammation from './icons/BarnOgoninflammation';
import BarnOntIHalsen from './icons/BarnOntIHalsen';
import BarnOvrigaBesvar from './icons/BarnOvrigaBesvar';
import BarnVattkoppor from './icons/BarnVattkoppor';
import Bihalebesvar from './icons/Bihalebesvar';
import Borrelia from './icons/Borrelia';
import Erektionsbesvar from './icons/Erektionsbesvar';
import Fodelsemarke from './icons/Fodelsemarke';
import ForskjutaMens from './icons/ForskjutaMens';
import Fortidigutlosning from './icons/Fortidigutlosning';
import Fotbesvar from './icons/Fotbesvar';
import Handbesvar from './icons/Handbesvar';
import Haravfall from './icons/Haravfall';
import Herpes from './icons/Herpes';
import Hosta from './icons/Hosta';
import Hudbesvar from './icons/Hudbesvar';
import Huvudvark from './icons/Huvudvark';
import IllaluktandeFlytningar from './icons/IllaluktandeFlytningar';
import Infektioner from './icons/Infektioner';
import Insektsbett from './icons/Insektsbett';
import KladaIUnderlivet from './icons/KladaIUnderlivet';
import Klamydia from './icons/Klamydia';
import Klimakteriebesvar from './icons/Klimakteriebesvar';
import Ledbesvar from './icons/Ledbesvar';
import MagbesvarNedre from './icons/MagbesvarNedre';
import MagbesvarOvre from './icons/MagbesvarOvre';
import Muskelochledbesvar from './icons/Muskelochledbesvar';
import Nagelsvamp from './icons/Nagelsvamp';
import Ogoninflammation from './icons/Ogoninflammation';
import OntIHalsen from './icons/OntIHalsen';
import Oronnasahals from './icons/Oronnasahals';
import OvrigaBesvar from './icons/OvrigaBesvar';
import Placeholder from './icons/Placeholder';
import PremensBesvar from './icons/PremensBesvar';
import Preventivmedel from './icons/Preventivmedel';
import Receptfornyelse from './icons/Receptfornyelse';
import Ryggont from './icons/Ryggont';
import Somnsvarigheter from './icons/Somnsvarigheter';
import StressOroDepression from './icons/StressOroDepression';
import Thyroid from './icons/Thyroid';
import Urinvagsbesvar from './icons/Urinvagsbesvar';
import VartorIUnderlivet from './icons/VartorIUnderlivet';

export const iconsByEntrywayId = {
  1: OvrigaBesvar,
  2: Urinvagsbesvar,
  3: OntIHalsen,
  4: Somnsvarigheter,
  // psykolog
  102: Somnsvarigheter,
  5: Bihalebesvar,
  6: MagbesvarOvre,
  7: Receptfornyelse,
  8: Hudbesvar,
  9: Fodelsemarke,
  10: MagbesvarNedre,
  11: Huvudvark,
  12: Hosta,
  13: Ryggont,
  14: Erektionsbesvar,
  15: Ledbesvar,
  16: Ogoninflammation,
  17: Borrelia,
  18: Preventivmedel,
  19: StressOroDepression,
  20: Allergi, // allergy B2B
  21: Allergi, // allergy B2C
  22: BarnEksem,
  23: BarnForstoppning,
  24: BarnOntIHalsen,
  25: BarnDiarreOchKrakningar,
  26: undefined, // deprecated mental health
  27: undefined, // general health
  28: undefined, // physio therapi
  29: ForskjutaMens,
  30: Urinvagsbesvar, // uti youth
  31: OntIHalsen, // tonsillitis youth
  32: Bihalebesvar, // sinusitisYoth
  33: MagbesvarOvre, // gastricProblemsUpperYouth
  34: Hudbesvar, // rashYouth
  35: Fodelsemarke, // birthmarkSkinTumorYouth
  36: MagbesvarNedre, // gastricProblemsLowerYouth
  37: Huvudvark, // headacheYouth
  38: Hosta, // coughYouth
  39: Ogoninflammation, // conjunctivitisYouth
  40: Borrelia, // borreliaYouth
  41: Allergi, // allergyYouth
  42: BarnVattkoppor,
  43: BarnOgoninflammation,
  44: Akne,
  45: Klamydia,
  46: Muskelochledbesvar,
  47: Herpes,
  48: Receptfornyelse, // renewalApoteket
  49: Preventivmedel, // anticonceptionApoteket
  50: BarnBorrelia,
  51: BarnAkne,
  // 52: require('./images/ic_revisit.svg'),
  // 53: require('./images/ic_revisit.svg'), // revisit under 18
  54: BarnKladaIRumpan,
  55: IllaluktandeFlytningar,
  56: Nagelsvamp,
  57: BarnInsektsbett,
  58: KladaIUnderlivet,
  59: VartorIUnderlivet,
  60: Insektsbett,
  61: PremensBesvar,
  62: Klimakteriebesvar,
  63: Haravfall,
  64: BarnOvrigaBesvar,
  65: Fortidigutlosning,
  66: Muskelochledbesvar, // physio
  67: Muskelochledbesvar, // physioRevisitCaregiver
  68: undefined, // invitationFromPhysioToDoctor
  69: Muskelochledbesvar, // invitationFromDoctorToPhysio
  70: Muskelochledbesvar, // invitationFromDoctorToPhysioFull
  71: Muskelochledbesvar, // physioRevisitPatient
  73: Thyroid, // thyroid
  103: AdultPregnancy,
};

export function getIconByEntrywayId(id) {
  if (iconsByEntrywayId[id]) {
    return iconsByEntrywayId[id];
  }
  return Placeholder;
}

export default getIconByEntrywayId;
