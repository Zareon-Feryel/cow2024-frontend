import { Button } from "../../shadcn/components/ui/button.tsx";
import { BEARER_KEY, USER_KEY } from "../../constants/constants.ts";
import { useNavigate } from "react-router-dom";
import RouterKeys from "../../routes/routerKeys.ts";
import { GithubButton } from "./GithubButton.tsx";

export function AccountPage() {
	const navigate = useNavigate();

	const handleDisconnect = () => {
		sessionStorage.removeItem(BEARER_KEY);
		sessionStorage.removeItem(USER_KEY);
		navigate(`/${RouterKeys.Login}`);
	};

	return (
		<div className="main-container h-full relative">
			<GithubButton />
			<Button
				onClick={handleDisconnect}
				className="absolute bottom-5 right-0"
				variant="destructive"
			>
				Déconnexion
			</Button>
		</div>
	);
}
