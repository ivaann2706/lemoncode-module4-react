import { MemberEntity } from "./list.vm";
import { getMemberCollection } from "./api/list.api";
import { mapMemberEntityListToVM } from "./list.mappers";

export const getMemberVMCollection = (): Promise<MemberEntity[]> => {
  return getMemberCollection().then(mapMemberEntityListToVM);
};
