import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { loggerMiddleware as logger } from './middlewares/logger';


const rootReducer = combineReducers({
  form: reduxFormReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(){
  const middlewares = [ logger ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store =  createStore(
    rootReducer,
    compose(
      middlewareEnhancer,
      (window as any).devToolsExtension && process.env.NODE_ENV !== 'production'
        ? (window as any).devToolsExtension() : (f: any) => f,
    ));
    return store;
}
