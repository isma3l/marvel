import { render } from '@testing-library/react';
import { ReactElement, ReactNode } from "react";
import { RouterProviderWrapper } from './RouterProviderWrapper';

export const renderWithRouterProvider = (ui: ReactElement) => {
    const ProviderWrapper = ({ children }: {children: ReactNode}) => (
        <RouterProviderWrapper>
            {children}
        </RouterProviderWrapper>
    );
    
    return render(ui, { wrapper: ProviderWrapper });
}