import styled from "styled-components";
import QuoteItem from "./QuoteItem";
import { useSelector } from "react-redux";
const QuoteList = () => {
	const { quotes } = useSelector((state) => state.quote);

	return (
		<QuoteContainer>
			{quotes.map((item) => (
				<QuoteItem key={item.id} {...item} />
			))}
		</QuoteContainer>
	);
};

export default QuoteList;

const QuoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`;
