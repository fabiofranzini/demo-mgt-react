import React, { useState, useLayoutEffect } from 'react';
import { Providers, MsalProvider } from '@microsoft/mgt';
import './tailwind.generated.css';
import AgendaWC from './agendaWC'
import AgendaReact from './agendaReact';
import NavBar from './navBar'


function App() {

  Providers.globalProvider = new MsalProvider({ clientId: '[CLIENT_ID]' });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useLayoutEffect(() => {
    if (Providers.globalProvider.state === 0)
      setIsLoggedIn(true);

    if (Providers.globalProvider.state === 1)
      setIsLoggedIn(false);
  }, []);

  return (
    <div>
      <NavBar />
      {(isLoggedIn) ?
        <div className="grid sm:grid-cols-2 gap-4 m-10">
          <div>
            <h1 className="mx-3 my-3 text-2xl leading-tight">
              Agenda
          </h1>
            <AgendaWC />
          </div>
          <div>
            <h1 className="mx-3 my-3 text-2xl leading-tight">
              Agenda (Using mgt-react)
          </h1>
            <AgendaReact />
          </div>
        </div>
        :
        <div className="font-semibold tracking-tight text-center shadow-md p-4 m-10">
          Login to show data
        </div>
      }
    </div>
  );
}

export default App;
