import React, { useRef } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MovieCard from "../Cards/MovieCard";
import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import { IMovieList, IGenres } from "../../interfaces";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface IProps {
	movieListSlider?: IMovieList | null;
	color: string;
	genreList: IGenres[];
	titleSection: string;
	urlSection: string;
}

const Slider: React.FC<IProps> = (props) => {

	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;

	const swiperRef = useRef<SwiperCore>();

	return (
		<>

			<Box
				margin="0 auto"
				maxW="1500px"
				height="420px"
			>
				<Flex w="100%" p="30px" justifyContent="space-between">
					<Text fontSize="30px" fontWeight="light">{props.titleSection}</Text>
					<Flex gap="15px">
						<Link
							as={ReactLink}
							to={props.urlSection}
							style={{textDecoration: "none"}}
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
						props.movieListSlider.results?.map((item) => (

							<SwiperSlide key={item.id}>
								<MovieCard
									key={item.id}
									title={item.title}
									id={item.id}
									imageUrl={`${baseUrlImage}${item.poster_path}`}
									genre={props.genreList && props.genreList?.find((e) => e.id === item.genre_ids[0])?.name}
									releaseDate={String(new Date(item.release_date).getFullYear())}
									voteAverage={`${item.vote_average}`}
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
