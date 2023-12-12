import { configureStore, createSlice } from '@reduxjs/toolkit'

let stock = createSlice({
    name: "stock",

    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],

    reducers: {
        addCount(state , a) {
            let index = a.payload;
            console.log("state", JSON.parse(JSON.stringify(state)))
            const target = state.filter((item) => item.id == index)[0]
            console.log("target", JSON.parse(JSON.stringify(target)))
            target.count += 1;
        }
    }

}
)

export let { addCount } = stock.actions;

export default stock