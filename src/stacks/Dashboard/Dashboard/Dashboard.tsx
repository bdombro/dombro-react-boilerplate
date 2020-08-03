import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { DefaultLayout } from "../../../layout/DefaultLayout";
import { authState } from "../../../state";

const titleDefault = "Dashboard";
const className = "dashboard";

const Dashboard: Dashboard = (props) => {
  const { history, location } = props;
  const [auth] = useRecoilState(authState);
  if (!auth.username) history.push(`/auth/login?from=${location.pathname}`);
  return (
    <DefaultLayout title={titleDefault} className={className}>
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to="/admin">Goto Admin Dashboard</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default Dashboard;

export type DashboardProps = RouteComponentProps<{} /* for example id: string */>;
export type Dashboard = React.FC<DashboardProps>;
