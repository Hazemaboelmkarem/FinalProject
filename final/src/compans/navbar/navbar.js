import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Navbar() {

	const [category, setcategory] = useState([])

	useEffect(() => {
		fetch('https://webeetec.com/itsharks24/blog/api/getcategory.php')
			.then(respons => respons.json())
			.then(data => {
				console.log(data);
				setcategory(data)
			})
	}, [])

	return (
		<div>
			<header id="header">
				<div className="siteHeader">
					<div className="wrapper clear">
						<ul className="mainMenu clear">
							<li>
								<Link to={'/'}>home</Link>
							</li>
							<li>

								<p className='navLinnks curs'>Category</p>
								<ul>

									{/* loop */}

									{
										category.map(c => {
											return (
												<li><Link to={"/category/" + c.name}>{c.name}</Link></li>
											)
										})
									}

									{/* loop */}

								</ul>

							</li>

						</ul>
						<div className="pull-right clear">
							<div className="headerSocialLinks clear">
								<Link to={'/'}><i className="fa fa-instagram"></i></Link>
								<Link to={'/'}><i className="fa fa-facebook"></i></Link>
								<Link to={'/'}><i className="fa fa-twitter"></i></Link>
								<Link to={'/'}><i className="fa fa-heart"></i></Link>
								<Link to={'/'}><i className="fa fa-pinterest"></i></Link>
								<Link to={'/'}><i className="fa fa-google-plus"></i></Link>
							</div>
							<div className="searchIcon"></div>
						</div>
						<span className="showMobileMenu">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
				</div>
				<Link to={'/'} className="logo">IT SHARKS 24</Link>
			</header>
		</div>
	);

}
export default Navbar