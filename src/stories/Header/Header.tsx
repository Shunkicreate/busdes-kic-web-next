const Header = () => {
	return (
		<div className='fixed top-0 w-full text-2xl text-contentText bg-main py-4 font-bold z-10'>
			<h1 className='w-fit m-auto'>Busdes!</h1>
			<div className='absolute w-fit h-fit right-8 top-4'>
				<button
					onClick={() => {
						location.reload();
					}}
				>
					<img src='/images/refresh.svg' alt='refresh button' className='w-8 h-8' />
				</button>
			</div>
		</div>
	);
};

export default Header;

