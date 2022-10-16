import * as am from "./api/list.api.model";
import * as vm from "./list.vm";

export const mapMemberEntityListToVM = (
  data: am.MemberEntity[]
): vm.MemberEntity[] => {
  return data.map(mapMemberEntityToVM);
};

const mapMemberEntityToVM = (member: am.MemberEntity): vm.MemberEntity => {
  return {
    id: member.id,
    login: member.login,
    avatarUrl: member.avatar_url,
  };
};
