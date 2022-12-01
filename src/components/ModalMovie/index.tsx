import React from "react";
import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

interface IProps {
	trailerKey?: string;
	isOpen: boolean;
	onClose: ()	=> void;
}

const ModalMovie: React.FC<IProps> = (props) => (

	<>
		<Modal isOpen={props.isOpen} onClose={props.onClose} size="2x1">
			<ModalOverlay />
			<ModalContent
				bg="#000"
				width="1000px"
				height="600px"
				m="auto"
				py="20px"
			>
				<ModalCloseButton color="#fff" />
				<ModalBody >
					<Box
						as="iframe"
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${props.trailerKey}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</ModalBody>
			</ModalContent>
		</Modal>
	</>
);

export default ModalMovie;
