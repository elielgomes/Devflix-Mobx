import axios from "axios";
import { ITrailer } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

const GetTrailer = async (id: string) => (
	axios.get<ITrailer>(`${baseUrl}${id}/videos?${apiKey}&language=pt-br`)
);
export default GetTrailer;
