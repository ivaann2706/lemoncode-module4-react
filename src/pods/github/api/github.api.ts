import { MemberEntity } from "./github.api.model";

export const getMemberCollection = (
  company: string
): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${company}/members`).then(
    (response) => response.json()
  );
};
