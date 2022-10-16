import { MemberEntity } from "./list.api.model";

export const getMemberCollection = (): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/lemoncode/members`).then(
    (response) => response.json()
  );
};
