import { AppLayout } from "@/layouts/app.layout";
import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

export const DetailScene = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>({
    id: "",
    login: "",
    name: "",
    company: "",
    bio: "",
  });

  const { login } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);
  return member ? (
    <AppLayout>
      <h3>{member.name}</h3>
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <Link to="/list">Go to List</Link>
    </AppLayout>
  ) : (
    <h3>Loading...</h3>
  );
};
