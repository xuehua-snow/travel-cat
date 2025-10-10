import zim from "https://zimjs.org/cdn/018/zim";

    new Frame("zimCanvas", 1200, 500, "rgb(245, 180, 142)", white, ready);
    function ready() {
            
        let Screen = new Rectangle(800,440,"rgba(247, 230, 193, 1)","rgba(255, 255, 255, 1)",3)
                .loc(30,30)
                
        let MapIcon = new Circle(35, "rgba(157, 221, 221, 1)","rgba(255, 255, 255, 1)",5)
            .addTo(Screen)
            .loc(60,60)

        let WeatherIcon = new Circle(20, "rgba(243, 181, 189, 1)","rgba(255, 255, 255, 1)",3)
            .addTo(Screen)
            .loc(60,160)

        let DecorateIcon = new Circle(20, "rgba(243, 181, 189, 1)","rgba(255, 255, 255, 1)",3)
            .addTo(Screen)
            .loc(60,230)
    } 
    