import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
function Posts() {

	const [posts, setposts] = useState([]);
	const [recent, setrecent] = useState([]);

	useEffect(() => {
		fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setposts(data)
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
			<section className="container mt-5">
				<div className="wrapper clear">
					<div class="clear"></div>
					<div className="contentLeft" >

						{/* loop */}

						{
							posts.map(post => {
								return (
									<div className="blogPostListWrap">
										<div className="blogPostListItem clear" key={post.id}>
											<Link to={"/singlepost/" + post.id + "/" + post.category} className="blogPostListImg">
												<img src={"https://webeetec.com/itsharks24/blog/admin/" + post.image} /></Link>

											<div className="blogPostListText">
												<div className="blogPostListTime">{post.date}</div>
												<h3><Link to={"/singlepost/" + post.id + "/" + post.category}>{post.title}</Link></h3>
												<p>{post.description}</p>
											</div>
										</div>
									</div>
								);
							})
						}

						{/* loop */}

						<div class="postPagination">
							<ul class="clear">
								<li class="newPosts"><a href="#">New posts</a></li>
								<li class="olderPosts"><a href="#">Older posts</a></li>
							</ul>
						</div>
					</div>
					<div className="sidebarRight">
						<div className="sidebar-widget">
							<h3>About us</h3>
							<div className="aboutMeWidget">
								<img src="images/ourlogo.png" alt="Francoise img"></img>
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
				</div >
			</section >
		</div >
	);
};

export default Posts;