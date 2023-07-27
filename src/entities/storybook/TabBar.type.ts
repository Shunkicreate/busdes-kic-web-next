import selectedPage from "../ui/selectedPage.type"

export interface TabBarProps {
	selectedPage: selectedPage
	onClick?: () => void
}
