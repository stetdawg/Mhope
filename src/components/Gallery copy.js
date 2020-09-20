import React,{ Component } from 'react'
import ResponsiveGallery from 'react-responsive-gallery'
import { FixedSizeList } from 'react-window'
import importAll from 'import-all.macro'
import '../scss/Gallery.scss'
    
const a = Object.values(importAll.sync('../assets/*.webp'))
console.log()


export default class Gallery extends Component {
    render() {
        return (
           <div className="Gallery">
           <FixedSizeList
           width={500}
           height={500}
           itemSize={120}
            itemCount={a.length}
           
           > 
           

           
      {     <ResponsiveGallery images={[
               {
                   src: a[1],
               },
               {
                   src: a[2],
               },
               {
                   src: a[3],
               },
               {
                   src: a[4],
               },
               {
                   src: a[5],
               },
               {
                   src: a[6],
               },
               {
                   src: a[7],
               },
               {
                   src: a[8],
               },
               {
                   src: a[9],
               },
               {
                   src: a[10],
               },
               {
                   src: a[11],
               },
               {
                   src: a[12],
               },
               {
                   src: a[13],
               },
               {
                   src: a[14],
               },
               {
                   src: a[15],
               },
               {
                   src: a[16],
               },
               {
                   src: a[17],
               },
               {
                   src: a[18],
               },
               {
                   src: a[19],
               },
               {
                   src: a[21],
               },
               {
                   src: a[22],
               },
               {
                   src: a[23],
               },
               {
                   src: a[24],
               },
               {
                   src: a[25],
               },
               {
                   src: a[26],
               },
               {
                   src: a[27],
               },
               {
                   src: a[28],
               },
               {
                   src: a[29],
               },
               {
                   src: a[30],
               },
               {
                   src: a[31],
               },
               {
                   src: a[32],
               },
               {
                   src: a[33],
               },
               {
                   src: a[34],
               },
               {
                   src: a[35],
               },
               {
                   src: a[36],
               },
           ]} numOfImagesPerRow={{xxl:3}} />}
           
           </FixedSizeList>

           </div>
            

        )
    }
}


