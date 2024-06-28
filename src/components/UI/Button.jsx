import styled from "styled-components";

const Button = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
	background-color: #008080;
	border: none;
	border-radius: 8px;
	padding: 8px 10px;
	color: #fff;
	cursor: pointer;
	transition: 200ms;
	font-size: 24px;
	&:hover {
		background-color: #11acac;
	}
`;
