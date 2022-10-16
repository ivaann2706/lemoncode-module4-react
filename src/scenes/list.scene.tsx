import React from "react";

import { AppLayout } from "@/layouts/app.layout";
import { ListContainer } from "@/pods/list";

export const ListScene = () => {
  // URL --> /list?page=4&count=10
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // console.log("PARAM PAGE: ", params.get("page")); // PARAM PAGE: 4

  return (
    <AppLayout>
      <ListContainer />
    </AppLayout>
  );
};
