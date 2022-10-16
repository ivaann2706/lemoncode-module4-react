import React from "react";

import { getMemberVMCollection } from "./list.repository";
import { List } from "./list.component";
import { MemberEntity } from "./list.vm";

export const ListContainer = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    getMemberVMCollection().then(setMembers);
  }, []);

  return <List members={members} />;
};
