import React, { useRef } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MovieCard from "../Cards/MovieCard";
import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import { IMovie, IGenres} from "../../interfaces";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface IProps {
	movieListSlider?: IMovie[] | null;
	color: string;
	genreList: IGenres[] | null;
	titleSection: string;
	urlSection: string;
}

const Slider: React.FC<IProps> = (props) => {

	const swiperRef = useRef<SwiperCore>();

	return (
		<>

			<Box
				margin="0 auto"
				maxW="1500px"
				height="420px"
			>
				<Flex
					w="100%"
					p={{sm:"0 0 20px", lg:"0 30px 20px"}}
					justifyContent={{sm:"center", lg:"space-between"}}
					alignItems={{sm:"center"}}
					direction={{sm:"column", lg:"row"}}
					gap={{sm:"15px"}}
				>
					<Text
						fontSize="30px"
						fontWeight="light"
					>{props.titleSection}
					</Text>
					<Flex gap="15px">
						<Link
							as={ReactLink}
							to={props.urlSection}
							style={{ textDecoration: "none" }}
						>
							<Button
								variant="outline"
								color="secondary.50"
								fontWeight="light"
							>
								ALL
							</Button>
						</Link>
						<Box>
							<Button
								variant="outline"
								color="secondary.50"
								onClick={() => swiperRef.current?.slidePrev()}
							>
								<IoIosArrowBack />
							</Button>
							<Button
								variant="outline"
								color="secondary.50"
								onClick={() => swiperRef.current?.slideNext()}
							>
								<IoIosArrowForward />
							</Button>
						</Box>
					</Flex>
				</Flex>


				<Swiper
					loopFillGroupWithBlank
					loop
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 0,
							slidesPerGroup: 2,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 0,
							slidesPerGroup: 3,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 0,
							slidesPerGroup: 4,
						},
						1240: {
							slidesPerView: 5,
							spaceBetween: 0,
							slidesPerGroup: 5,
						},
					}}
					modules={[Navigation]}
					className="mySwiper"
				>
					{props.movieListSlider &&
						props.movieListSlider?.map((item) => (

							<SwiperSlide key={item.id}>
								<MovieCard
									movie={item}
									key={item.id}
									genre={props.genreList && props.genreList?.find((e) => e.id === item.genre_ids[0])?.name}
									color={props.color}
								/>
							</SwiperSlide>
						))}
				</Swiper>
			</Box>
		</>
	);
};

export default Slider;
