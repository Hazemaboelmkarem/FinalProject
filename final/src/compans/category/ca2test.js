import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Category() {
	const [catone, setcatone] = useState([]);
	const [recent, setrecent] = useState([])
	const Allparams = useParams();
	useEffect(() => {
		fetch(`https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category=${Allparams.name}`)
			.then(res => res.json())
			.then(data => setcatone(data))
	})
	useEffect(() => {
		fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
			.then(res => res.json())
			.then(data => {
				setrecent(data)
			})
	})
	return (
		<div className="archive category">
			<section class="container">
				<div class="wrapper clear">
					<div class="contentLeft">
						{
							catone.map(i => {
								return (
									<div>
										<div class="archivePageTitle"><span>{i.category}</span></div>
										<div class="archivePostWrap">
											<div class="archivePostItem">
												<div class="archivePostTime">{i.date}</div>
												<h3 class="archivePostTitle"><Link to={'/single/' + i.id}>{i.title}</Link></h3>
												<Link to={'/single/' + i.id + '/' + i.category} class="archivePostCategory">{i.category}</Link>
												<Link to={'/single/' + i.id + '/' + i.category} class="archivePostImg">
													<img src={'https://webeetec.com/itsharks24/blog/admin/' + i.image} alt="Francoise img" />
												</Link>
												<p>{i.description}</p>
												<div class="archivePostItemMeta">
													<Link to="#" class="archivePostItemComments">124 Comments</Link>
													<div class="archivePostItemShareLinks">
														<Link to="#"><i class="fa fa-facebook"></i></Link>
														<Link to="#"><i class="fa fa-twitter"></i></Link>
														<Link to="#"><i class="fa fa-pinterest"></i></Link>
													</div>
													<Link to="single.html" class="archivePostReadMore">Read More</Link>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
						<div class="postPagination">
							<ul class="clear">
								<li class="newPosts"><Link to="#">New posts</Link></li>
								<li class="olderPosts"><Link to="#">Older posts</Link></li>
							</ul>
						</div>
					</div>
					<div class="sidebarRight">
						<div class="sidebar-widget">
							<h3>About us</h3>
							<div class="aboutMeWidget">
								<img src="../images/ourlogo.png" alt="Francoise img" />
								<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
							</div>
						</div>
						<div class="sidebar-widget">
							<h3>follow me</h3>
							<div class="followMeSocialLinks">
								<Link to="#"><i class="fa fa-instagram"></i></Link>
								<span></span>
								<Link to="#"><i class="fa fa-facebook"></i></Link>
								<span></span>
								<Link to="#"><i class="fa fa-twitter"></i></Link>
								<span></span>
								<Link to="#"><i class="fa fa-heart"></i></Link>
								<span></span>
								<Link to="#"><i class="fa fa-pinterest"></i></Link>
								<span></span>
								<Link to="#"><i class="fa fa-google-plus"></i></Link>
							</div>
						</div>

						<div class="sidebar-widget">
							<h3>Recent post</h3>
							<div className="popularPostsWidget">
								{
									recent.map(i => {
										return (
											<div className="popularPostsWidgetItem" key={i.id}>
												<Link to="#" className="popularPostsItemImg">
													<img src={'https://webeetec.com/itsharks24/blog/admin/' + i.image} alt="Francoise img" /></Link>
												<time datetime="2015-05-15">{i.date}</time>
												<h4><Link to="#">{i.title}</Link></h4>
											</div>
										)
									})
								}
							</div>
						</div>


					</div>
				</div>
				<div class="clear"></div>

			</section>
		</div>
	)
}
export default Category;