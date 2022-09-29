import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function Category() {

	const allparams = useParams();
	const [catgory, setcategory] = useState([]);
	const [recent, setrecent] = useState([]);


	useEffect(() => {

		fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category=' + allparams.category)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setcategory(data);
			})

	}, [])
	useEffect(() => {
		fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
			.then(res => res.json())
			.then(data => {
				setrecent(data)
			})
	}, [])

	return (
		<div>
			<section className="container">
				<div className="wrapper clear">
					<div className="contentLeft">

						{/* loop */}

						{
							catgory.map(c => {
								return (
									<div>
										<div className="archivePageTitle"><span>{c.category}</span></div>
										<div className="archivePostWrap">
											<div className="archivePostItem">
												<div className="archivePostTime">{c.date}</div>
												<h3 className="archivePostTitle"><Link to={"/singlepost/" + c.id}>{c.title}</Link></h3>
												<Link to={"/singlepost/" + c.id + "/" + c.category} className="archivePostCategory">{c.name}</Link>
												<Link to={"/singlepost/" + c.id + "/" + c.category} className="archivePostImg">
													<img src={"https://webeetec.com/itsharks24/blog/admin/" + c.image} alt="Francoise img" />
												</Link>
												<p>{c.description}</p>
												<div className="archivePostItemMeta">
													<a href="#" className="archivePostItemComments">124 Comments</a>
													<div className="archivePostItemShareLinks">
														<a href="#"><i className="fa fa-facebook"></i></a>
														<a href="#"><i className="fa fa-twitter"></i></a>
														<a href="#"><i className="fa fa-pinterest"></i></a>
													</div>
													<a href="single.html" className="archivePostReadMore">Read More</a>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}

						{/* loop */}

						<div className="postPagination">
							<ul className="clear">
								<li className="newPosts"><a href="#">New posts</a></li>
								<li className="olderPosts"><a href="#">Older posts</a></li>
							</ul>
						</div>
					</div>
					<div className="sidebarRight">
						<div className="sidebar-widget">
							<h3>About us</h3>
							<div className="aboutMeWidget">
								<img src="images/ourlogo.png" alt="Francoise img" />
								<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
							</div>
						</div>
						<div className="sidebar-widget">
							<h3>follow me</h3>
							<div className="followMeSocialLinks">
								<a href="#"><i className="fa fa-instagram"></i></a>
								<span></span>
								<a href="#"><i className="fa fa-facebook"></i></a>
								<span></span>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<span></span>
								<a href="#"><i className="fa fa-heart"></i></a>
								<span></span>
								<a href="#"><i className="fa fa-pinterest"></i></a>
								<span></span>
								<a href="#"><i className="fa fa-google-plus"></i></a>
							</div>
						</div>

						<div className="sidebar-widget">
							<h3>Recent post</h3>
							<div className="popularPostsWidget">
								{
									recent.map(r => {
										return (
											<div className="popularPostsWidgetItem" key={r.id}>
												<Link to="#" className="popularPostsItemImg">
													<img src={'https://webeetec.com/itsharks24/blog/admin/' + r.image} alt="Francoise img" /></Link>
												<time datetime="2015-05-15">{r.date}</time>
												<h4><Link to="#">{r.title}</Link></h4>
											</div>
										)
									})
								}
							</div>
						</div>

					</div>
				</div>
				<div className="clear"></div>

			</section>
		</div>
	);
}
export default Category;