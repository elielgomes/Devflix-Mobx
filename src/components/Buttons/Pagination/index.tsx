import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

interface IProps {
	changePrevPage: () => void;
	changeNextPage: () => void;
	changeSkipPage: () => void;
	currentPage: number;
	nextPage: number;
	skipPage: number;
	maxPage: number;
}

const Pagination: React.FC<IProps> = (props) => (
	<>
		<Flex gap="10px" alignItems="center">
			<Box>
				<Button
					display={props.currentPage === 1 ? "none" : "initial"}
					onClick={props.changePrevPage}
				>
					<FaAngleDoubleLeft />
				</Button>
			</Box>
			<Box>
				<Button bg="primary.100" h="45px">
					{props.currentPage}
				</Button>
			</Box>
			<Box>
				<Button
					display={props.currentPage === props.maxPage  ? "none" : "initial"}
					onClick={props.changeNextPage}
				>
					{props.nextPage}
				</Button>
			</Box>
			<Box>
				<Button
					display={props.currentPage >= props.maxPage - 1 ? "none" : "initial"}
					onClick={props.changeSkipPage}
				>
					{props.skipPage}
				</Button>
			</Box>
			<Box>
				<Button
					display={props.currentPage >= props.maxPage - 1 ? "none" : "initial"}
					onClick={props.changeNextPage}
				>
					<FaAngleDoubleRight />
				</Button>
			</Box>
		</Flex>
	</>
);

export default Pagination;
