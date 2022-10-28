import React from "react";

import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

import { routes } from "@/core/router/routes";
import { MemberEntity } from "./github.vm";

interface Props {
  members: MemberEntity[];
}

export const GithubList = (props: Props) => {
  const { members } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pag: number
  ) => {
    setPage(pag);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((member: MemberEntity) => (
              <TableRow key={member.id}>
                <TableCell align="center">
                  <img className="avatar" src={member.avatarUrl} />
                </TableCell>
                <TableCell align="center">{member.id}</TableCell>
                <TableCell align="center">
                  <Link to={routes.githubDetail(member.login)}>{member.login}</Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
