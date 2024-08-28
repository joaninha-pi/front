import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrossel.css";
import { Navigation, Pagination } from 'swiper/modules';

function Carrossel() {
    var items = [
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276494448234070057/vincent-van-zalinge-oBL5QRAxZzo-unsplash.jpg?ex=66d05318&is=66cf0198&hm=1c468c7a043dcb4f886564535d28f5501933c87969ef8c82ea1a85ce3c45d3a6&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276545587399102555/Leonardo_Phoenix_Create_a_highresolution_PNG_image_with_a_tran_0.jpg?ex=66cfd9f9&is=66ce8879&hm=31ede730ae27b9e7e8f6acf71d7567aea727b8c46a6194139e4c80c83513fd89&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276496904317964288/odiseo-castrejon-1CsaVdwfIew-unsplash.jpg?ex=66d05562&is=66cf03e2&hm=666ba2236cb4949f3895e016412ae18c222e691ba5ae72ccd490f4c45f4a8d81&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276543165695791228/Leonardo_Phoenix_Create_a_vibrant_and_eyecatching_packaging_de_1.jpg?ex=66cfd7b7&is=66ce8637&hm=ba74f4cb9260fa4558eb6a2825aa96db15cf5dab69bc3f75b2c5202234430ea9&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276494450348003369/markus-spiske-O70hwncRDC8-unsplash.jpg?ex=66d05319&is=66cf0199&hm=68d94b225f5574f73619d38ed2bf853143cb762c4fe596573aa1c0f05ebce87a&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276542586764656712/Leonardo_Phoenix_Create_a_vibrant_packaging_design_featuring_a_1.jpg?ex=66cfd72d&is=66ce85ad&hm=015de7bd6d2012b4adb5e9a8c08ae8f2cbdaaa4c897af762e414a681de9a9b7f&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276496906960371722/juan-jose-valencia-antia-TTrJMhrkoeY-unsplash.jpg?ex=66d05562&is=66cf03e2&hm=513f5cf07c31e91f72030851733e8520b49f86a0520717aa11c7872c8f32096b&"},
    ];

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10} 
            loop={true}
            pagination={{
                clickable: true,
                dynamicBullets: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item.img} alt={`Imagem ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carrossel;
