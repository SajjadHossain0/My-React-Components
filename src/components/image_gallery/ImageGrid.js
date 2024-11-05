import React, {useState} from 'react';
import './ImageGrid.css'
import ResponsiveCardImg from "../cards/ResponsiveCardImg";

export default function ImageGrid(props) {

    const [images] = useState(
        [
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
            },
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/450010724_2067922036937430_195720533629024530_n.jpg?stp=c0.190.1473.1473a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=52bb43&_nc_ohc=_PK7YQ9xBZcQ7kNvgFUYbyJ&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AT6qt86dEPtjExthrr1XiNl&oh=00_AYD0ffrwNCgj_46UI1jeau95COzZvSV86gWeF-KOvvg4lA&oe=6730027B"
            },
            {
                imageLink: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/324886806_1135143187196970_7652724403393996171_n.jpg?stp=c0.185.720.720a_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=A5dSBFdxovIQ7kNvgEwqGfe&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYBrA85j3vw8wt4m4SedpOctI-xuZRjCHVi-6A6krfsjPw&oe=6730020B"
            },
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
            },
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/450010724_2067922036937430_195720533629024530_n.jpg?stp=c0.190.1473.1473a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=52bb43&_nc_ohc=_PK7YQ9xBZcQ7kNvgFUYbyJ&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AT6qt86dEPtjExthrr1XiNl&oh=00_AYD0ffrwNCgj_46UI1jeau95COzZvSV86gWeF-KOvvg4lA&oe=6730027B"
            },
            {
                imageLink: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/324886806_1135143187196970_7652724403393996171_n.jpg?stp=c0.185.720.720a_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=A5dSBFdxovIQ7kNvgEwqGfe&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYBrA85j3vw8wt4m4SedpOctI-xuZRjCHVi-6A6krfsjPw&oe=6730020B"
            },
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
            },
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/450010724_2067922036937430_195720533629024530_n.jpg?stp=c0.190.1473.1473a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=52bb43&_nc_ohc=_PK7YQ9xBZcQ7kNvgFUYbyJ&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AT6qt86dEPtjExthrr1XiNl&oh=00_AYD0ffrwNCgj_46UI1jeau95COzZvSV86gWeF-KOvvg4lA&oe=6730027B"
            },
            {
                imageLink: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/324886806_1135143187196970_7652724403393996171_n.jpg?stp=c0.185.720.720a_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=A5dSBFdxovIQ7kNvgEwqGfe&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYBrA85j3vw8wt4m4SedpOctI-xuZRjCHVi-6A6krfsjPw&oe=6730020B"
            },
            {
                imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
            }
        ]
    );
    return (
        <div className="container">
            <h2 align="center" className="title">Gallery</h2>

            <div className="photo-gallery">
                {images.map((image, i) => (
                    <div className="column">

                        <div className="photo">
                            <img src={image.imageLink}/>
                        </div>

                    </div>
                ))}


            </div>
        </div>
    )
}