import React, {useEffect } from "react";
import  {Link as ReactLink, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";

import { Input, Flex, Box, Image, Link } from "@chakra-ui/react";

const Navbar: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const navigate = useNavigate();
	const debounceValue: string = useDebounce(store.search, 2000);

	useEffect(() => {
		if (!debounceValue || !debounceValue.trim()){
			return;
		}
		navigate(`/search?q=${debounceValue}`);
		store.setSearch("");
	}, [debounceValue]);

	return (
		<>
			<Box
				height="80px"
				bg="secondary.300"
				position="fixed"
				w="100vw"
				zIndex={1}
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
						<Image src="/assets/image/DEVFLIX-brand-sm.png" />
					</Link>

					<Box mr="30px">
						<Input
							variant="fill"
							type="search"
							placeholder="Busque seus filmes favoritos"
							width="300px"
							p="10px"
							value={store.search}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => store.setSearch(e.target.value)}
						/>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default observer(Navbar);
