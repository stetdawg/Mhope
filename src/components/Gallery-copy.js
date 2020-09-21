import React,{ Component, Fragment } from 'react'
import ResponsiveGallery from 'react-responsive-gallery'
import { FixedSizeGrid as Grid} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";
import AOS from 'aos'
import 'aos/dist/aos.css'

import importAll from 'import-all.macro'
import '../scss/Gallery.scss'
    
const a = Object.values(importAll.sync('../assets/thumbnails/*.webp'))



const grid = [[],[],[],[],[]]
    let acount = 0

for(let i = 0; i<10; i++ ){
    for(let j = 0; j<5; j++){
        grid[j].push(a[acount])
        acount++
    }
}


console.log(grid)





const n = ({columnIndex, rowIndex, key, style}) => <div data-aos="fade-in"
key={key} style={style}>
<img src={grid[columnIndex][rowIndex]} loading="lazy" width="300" height="200" alt="Gallery Item"/>
</div>


export default class Gallery extends Component {
    
    render() {
        let intViewportWidth = window.innerWidth
        let intViewportHeight = window.innerHeight

        return (
            <div className="Gallery"> 
                <AutoSizer  defaultWidth={intViewportWidth} defaultHeight={intViewportHeight}>
                    {({ height, width }) => (    
                        <Grid
                        className="Grid"
                        columnCount={5}
                        columnWidth={380}
                        rowCount={6}
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


