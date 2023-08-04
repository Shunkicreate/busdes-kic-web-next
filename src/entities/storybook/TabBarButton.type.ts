export interface TabBarButtonProps {
	//ボタンの大きさ
	size?: 'small' | 'medium' | 'large'
	//画面に表示する文字列
	label: string
	//alt属性の文字列
	alt: string
	//画像のパス
	src: string
	//背景色
	backgroundColor?: string
	//クリック時のイベント
	onClick?: () => void
}
