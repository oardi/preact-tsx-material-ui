import Button from "@material-ui/core/Button";
import { h } from "preact";
import { useState } from "preact/hooks";

interface IButtonCounterProps {
	name: string;
	onClicked?: (e: number) => void;
}

export const ButtonCounter = ({ name, onClicked }: IButtonCounterProps) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
		onClicked && onClicked(count);
	};

	return (
		<Button color="primary" variant="contained" onClick={() => handleClick()}>
			{name} - You clicked me {count} times
		</Button>
	);
};
