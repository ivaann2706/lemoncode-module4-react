import React from "react";

import { getMemberVMCollection } from "./list.repository";
import { List } from "./list.component";
import { MemberEntity } from "./list.vm";
import { MyContext } from "@/app";

export const ListContainer = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { filter } = React.useContext(MyContext);

  React.useEffect(() => {
    getMemberVMCollection(filter).then(setMembers);
  }, [filter]);

  return <List members={members} />;
};
