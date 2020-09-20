import React,{ Component, Fragment } from 'react'
import ResponsiveGallery from 'react-responsive-gallery'
import { FixedSizeGrid as Grid} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";

import importAll from 'import-all.macro'
import '../scss/Gallery.scss'
    
const a = Object.values(importAll.sync('../assets/*.webp'))



const grid = [[],[],[],[],[]]
    let acount = 0

for(let i = 0; i<8; i++ ){
    for(let j = 0; j<=4; j++){
        grid[j].push(a[acount])
        acount++
    }
}


console.log(grid)





const n = ({columnIndex, rowIndex, key, style}) => <div key={key} style={style}>
<img src={grid[columnIndex][rowIndex]} alt="Gallery Item"/>
</div>


export default class Gallery extends Component {
    render() {
        return (
            <div className="Gallery"> 
                <AutoSizer >
                    {({ height, width }) => (    
                        <Grid
                        className="Grid"
                        columnCount={4}
                        columnWidth={435}
                        rowCount={8}
                        rowWidth={100}
                        rowHeight={220}
                        width={width}
                        height={height}
                        itemSize={1}
                        itemCount={a.length}
                        > 
                        {n}

                        </Grid>

                    )}
                </AutoSizer>   
            </div>
    )}
}


