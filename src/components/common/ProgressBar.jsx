import styled from '@emotion/styled'

const Container = styled.div`
	width: 100%;
	height: 15px;
	background-color: ${({ theme }) => theme.colors.baseColor};
	border: 1px solid ${({ theme }) => theme.colors.subColor};
	border-radius: 10px;
	transition: 0.3s;
	> div {
		width: ${({ percent }) => percent}%;
		height: 100%;
		background: linear-gradient(
			-45deg,
			${({ theme }) => theme.colors.primary},
			${({ theme }) => theme.colors.secondary},
			#3498db,
			#2980b9
		);
		background-size: 200% 200%;
		animation: gradientAnimation 10s ease infinite;
		border-radius: inherit;
		transition: 0.3s;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		border-radius: 5px;
	}
	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`

const ProgressBar = ({ percent }) => (
	<Container percent={percent}>
		<div />
	</Container>
)

export default ProgressBar
