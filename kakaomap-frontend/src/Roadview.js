/* global kakao */
import React, { useState, useEffect } from 'react'

const { kakao } = window;

const Roadview = () => {

    //const [mouseClicked, setMouseClicked] = useState(true);
    const [lat, setLat] = useState(33.450701);
    const [lng, setLng] = useState(126.570667);

    useEffect(()=>{
        var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
        var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
        var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
    
        var position = new kakao.maps.LatLng(lat, lng);
    
        // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        roadviewClient.getNearestPanoId(position, 50, function(panoId) {
            roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
        });

        console.log(roadview);

    }, [lat, lng])

    function mouseClicked(event) {
        setLat(lat + 0.001);
        setLng(lng + 0.0001);
    }
    
    
        return (
            <div id="roadviewContainer" onClick={() => mouseClicked()}>
                <div id="roadview" style={{width:"600px", height:"400px", marginLeft:"100px", marginTop:"100px"}}></div>
            </div>
        )
};

export default Roadview;
