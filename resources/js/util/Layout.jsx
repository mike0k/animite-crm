import Store from '../store/Store';
import * as LayoutReducer from '../store/reducer/LayoutReducer';

export const clear = () => Store.dispatch(LayoutReducer.clear());
export const get = () => Store.getState().layout;
export const set = (data) => Store.dispatch(LayoutReducer.set(data));
//const update = (data) => Store.dispatch(UserReducer.merge(data));

export const toggleStyle = () => {
    const { style } = get();
    const newStyle = style === 'dark' ? 'light' : 'dark';
    set({ style: newStyle });
};
