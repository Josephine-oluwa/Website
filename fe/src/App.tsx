import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./States/Store";
import { mainRoute } from "./Routes/mainRoute";

const App = () => {
  const persist = persistStore(store);
  return (
    <>
      <div>
        <div className="">
          <Provider store={store}>
            <PersistGate persistor={persist}>
              <RouterProvider router={mainRoute} />
            </PersistGate>
          </Provider>
        </div>
      </div>
    </>
  );
};
store;

export default App;
