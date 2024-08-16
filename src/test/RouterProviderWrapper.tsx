import * as ReactRouterDom from 'react-router-dom';
import { ProviderWrapper } from './ProviderWrapper';
import { ReactNode } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';

const memoryHistory = createMemoryHistory();

type RouterProviderWrapperProps = {
  children: ReactNode;
  history?: MemoryHistory;
};

export const RouterProviderWrapper = ({
  children,
  history = memoryHistory
}: RouterProviderWrapperProps) => (
  <ReactRouterDom.Router location={history.location} navigator={history}>
    <ProviderWrapper>{children}</ProviderWrapper>
  </ReactRouterDom.Router>
);
