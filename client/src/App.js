import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ErrorComponent
} from "@pankod/refine-antd";
import pluralize from "pluralize";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import dataProvider, { getQueries } from "./dataProvider";
import client from "./client";
import routerProvider from "@pankod/refine-react-router";
import "@pankod/refine-antd/dist/styles.min.css";

import { DataPage } from "./DataPage";

const queryClient = new QueryClient()

const Models = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    getQueries(client)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <Refine
        dataProvider={dataProvider(client)}
        routerProvider={routerProvider}
        resources={
          data.map(model => ({
            name: model,
            list: DataPage,
          }))
        }
        notificationProvider={notificationProvider}
        Layout={Layout}
        catchAll={<ErrorComponent />}
      />
    </div>
  )
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Models />
    </QueryClientProvider>

  );
};

export default App;
