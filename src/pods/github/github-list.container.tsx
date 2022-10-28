import React from "react";

import { getMemberVMCollection } from "./github.repository";
import { GithubList } from "./github-list.component";
import { MemberEntity } from "./github.vm";
import { MyContext } from "@/app";

export const GithubListContainer = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { filter } = React.useContext(MyContext);

  React.useEffect(() => {
    getMemberVMCollection(filter).then(setMembers);
  }, [filter]);

  return <GithubList members={members} />;
};
