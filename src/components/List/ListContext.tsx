import { createContext, useContext } from 'react';

export type ListTheme = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type ListBorderDirection = 'top' | 'bottom' | 'left' | 'right' | 'all' | 'none';

interface ListContextProps {
    theme: ListTheme;
    borderDirection: ListBorderDirection;
}

const ListContext = createContext<ListContextProps | undefined>(undefined);

export const ListProvider = ListContext.Provider;

export const useListContext = () => {
    const context = useContext(ListContext);
    if (!context) {
        return {
            theme: 'primary' as ListTheme,
            borderDirection: 'left' as ListBorderDirection
        };
    }
    return context;
};
