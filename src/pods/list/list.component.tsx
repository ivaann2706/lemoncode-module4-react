import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core/router/routes";
import { MemberEntity } from "./list.vm";
import { MyContext } from "@/app";

interface Props {
  members: MemberEntity[];
}

export const List = (props: Props) => {
  const { members } = props;
  const { filter, setFilter } = React.useContext(MyContext);
  const [textFilter, setTextFilter] = React.useState(filter);

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  const handleClick = () => {
    setFilter(textFilter);
  };

  return (
    <>
      <input value={textFilter} onChange={handleChange} />
      <button onClick={handleClick}>Buscar</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member: MemberEntity) => (
          <React.Fragment key={member.id}>
            <img src={member.avatarUrl} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
