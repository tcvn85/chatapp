import React, { createContext, SetStateAction, Dispatch } from 'react';
import {IChatItem}  from '../types/dataType';

interface IAppContext {
  chatItems: IChatItem[];
  setChatItems: Dispatch<SetStateAction<IChatItem[]>>;
}

const AppContext = createContext<IAppContext>({
  chatItems: [],
  setChatItems: () => {},
});


export default AppContext;