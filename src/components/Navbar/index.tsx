import React, { useEffect, useContext } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

import { Input, Flex, Box, Image, Link } from "@chakra-ui/react";
import { ISearchInput, SearchInputContext } from "../../contexts/SearchInput";

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const { searchInput, setSearchInput } = useContext(SearchInputContext) as ISearchInput;
	const debounceValue: string = useDebounce(searchInput, 2000);

	useEffect(() => {
		if (!debounceValue || !debounceValue.trim()) {
			return;
		}
		navigate(`/search?q=${debounceValue}`);
		setSearchInput("");
	}, [debounceValue]);

	return (
		<>
			<Box
				height="80px"
				bg="secondary.300"
				position="fixed"
				w="100vw"
				zIndex={99}
			>
				<Flex
					as="nav"
					h="100%"
					margin="auto"
					align="center"
					justifyContent="space-between"
					gap="20px"
					maxW="1500px"
				>
					<Link as={ReactLink} to="/" ml="40px">
						<Image
							w={{sm:"70px", md: "90px", lg: "initial"}}
							src="/assets/image/DEVFLIX-brand-sm.png"
						/>
					</Link>

					<Box mr="30px">
						<Input
							variant="fill"
							type="search"
							placeholder="Busque seus filmes favoritos"
							width={{ sm: "120px", md: "160px", lg: "250px"}}
							p="10px"
							value={searchInput}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
						/>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default Navbar;
