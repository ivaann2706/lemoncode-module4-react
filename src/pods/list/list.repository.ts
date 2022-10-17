import { MemberEntity } from "./list.vm";
import { getMemberCollection } from "./api/list.api";
import { mapMemberEntityListToVM } from "./list.mappers";

export const getMemberVMCollection = (
  company: string
): Promise<MemberEntity[]> => {
  return getMemberCollection(company).then(mapMemberEntityListToVM);
};
