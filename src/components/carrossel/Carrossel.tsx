import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrossel.css";
import { Navigation, Pagination } from 'swiper/modules';

function Carrossel() {
    var items = [
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276496906960371722/juan-jose-valencia-antia-TTrJMhrkoeY-unsplash.jpg?ex=66ce5b22&is=66cd09a2&hm=070e81586d18183bddf2a46253bc6788df4bda49765b6e05fa1f155845586a6a&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276496908130455645/arturrro-GdTLaWamFHw-unsplash.jpg?ex=66ce5b23&is=66cd09a3&hm=2711b94d4864e112f386f0fc2115100edf2a4b5099d6351efba32e5a698adfcf&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276545587399102555/Leonardo_Phoenix_Create_a_highresolution_PNG_image_with_a_tran_0.jpg?ex=66cddfb9&is=66cc8e39&hm=4b05a4aced7410cd81c44c6772aa6d3eb0f96932bab80dbaa47e02f7219dc4c2&"},
        { img: "https://cdn.discordapp.com/attachments/1262942566370775061/1276543165695791228/Leonardo_Phoenix_Create_a_vibrant_and_eyecatching_packaging_de_1.jpg?ex=66cddd77&is=66cc8bf7&hm=58f0f903b394b14a2bbe78eca72ff17bedf1dd1555c508b10f3c4e59eb971674&"},
        { img: "https://media.discordapp.net/attachments/1262942566370775061/1276496904317964288/odiseo-castrejon-1CsaVdwfIew-unsplash.jpg?ex=66ce5b22&is=66cd09a2&hm=7c63d102916d5869047301226b45ef528d653c03b2df8f071a6ffc5c9538d135&=&format=webp&width=625&height=416"},
        { img: "https://media.discordapp.net/attachments/1262942566370775061/1276494450348003369/markus-spiske-O70hwncRDC8-unsplash.jpg?ex=66ce58d9&is=66cd0759&hm=fdceadddd58bef046d88c214cc8b7b344c7d32642b2d4d58ab12ff9c42dccd2e&=&format=webp&width=625&height=416"},
        { img: "https://media.discordapp.net/attachments/1262942566370775061/1276542586764656712/Leonardo_Phoenix_Create_a_vibrant_packaging_design_featuring_a_1.jpg?ex=66cddced&is=66cc8b6d&hm=aeab2efbb144e7125f5960a115d0a72bf3fb0be3f00aea54744a902d8715cda9&=&format=webp&width=736&height=416"},
        { img: "https://media.discordapp.net/attachments/1262942566370775061/1276494448234070057/vincent-van-zalinge-oBL5QRAxZzo-unsplash.jpg?ex=66ce58d8&is=66cd0758&hm=6e7f99d1f63965cc1719710bfe2220b7c322070aba9f8e7777c57722c50edb39&=&format=webp&width=624&height=416"},
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
