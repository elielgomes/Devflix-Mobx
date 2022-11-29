import React from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import { Box } from "@chakra-ui/react";

const carousel: KeenSliderPlugin = (slider) => {
	const z = 300;

	slider.on("created", () => {
		const deg = 360 / slider.slides.length;

		slider.slides.forEach((element, idx) => {
			element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
		});
	});

	slider.on("detailsChanged", () => {
		const deg = 360 * slider.track.details.progress;
		slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
	});
};

const Carousel: React.FC = () => {

	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: true,
			selector: ".carousel__cell",
			renderMode: "custom",
			mode: "free-snap",
			drag: true,
		},
		[carousel],
	);

	const listSlidesImage = [
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",
		"https://image.tmdb.org/t/p/w500//8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg",

	];

	return (
		<>
			<Box
				as="div"
				marginBottom="130px"
				margin="80px auto"
				maxW="600px"
				overflow="hidden"
				height="290px"
			>
				<Box as="div" display="flex" justifyContent="center">
					<Box
						as="div"
						width="260px"
						height="200px"
						sx={{ perspective: "1000px" }}
						position="relative"
					>

						<Box
							as="div"
							ref={sliderRef}
							width="100%"
							height="100%"
							overflow="visible"
							position="absolute"
							transform="translateZ(-288px)"
							sx={{ transformStyle: "preserve-3d" }}
						>
							{listSlidesImage.map((image: string, index: number) => (
								<>
									<Box
										as="div"
										className="carousel__cell"
										key={index + image}
										bgImage={image}
										bgSize="cover"
										bgPosition="center center"
										position="absolute"
										width="180px"
										left="10px"
										height="270px"
										borderRadius="10px"
									/>
								</>
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Carousel;
