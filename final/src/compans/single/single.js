import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Single() {

	const allparams = useParams();

	const [post, setpost] = useState([]);
	const [recent, setrecent] = useState([]);

	useEffect(() => {

		fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id=' + allparams.id)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setpost(data);
			})

	}, [])


	const [related, setrelated] = useState([]);

	useEffect(() => {

		fetch('https://webeetec.com/itsharks24/blog/api/getrelated.php?category=' + allparams.category + '&id=' + allparams.id)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setrelated(data);
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
							post.map(s => {
								return (
									<div>
										<div className="singlePostMeta" key={s.id}>
											<div className="singlePostTime"></div>
											<h2 className="singlePostCategory">{s.date}</h2>
											<h1>{s.title}</h1>
											<a href="#" className="singlePostCategory">{s.category}</a>
										</div>
										<div className="singlePostWrap">
											<div className="singlePostImg">
												<img src={"https://webeetec.com/itsharks24/blog/admin/" + s.image} alt="Francoise img"></img>
											</div>
											<p>{s.description}</p>
										</div>
									</div>
								)
							})
						}

						<div className="relatedPostsBox">
							<h3>related posts</h3>
							{/* loop */}

							{
								related.map(r => {
									return (
										<div className="relatedPostsWrap clear">
											<a href="#" className="relatedPostItem">
												<img src={"https://webeetec.com/itsharks24/blog/admin/" + r.image} alt="Francoise img" />
												<div className="overlayBox">
													<div className="relatedPostDesc">
														<div className="postTime">15.05.2015</div>
														<h4>MY BEDSIDE TABLE: THE CURATOR</h4>
													</div>
												</div>
											</a>
										</div>
									)
								})

							}


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
				<div className="ourInstagram">
					<div id="sb_instagram">
						<div className="sb_instagram_header">
							<a href="#" className="sbi_header_link">Follow on instagram</a>
						</div>
						<div id="sbi_images">
							<div className="sbi_item sbi_type_image">
								<div className="sbi_photo_wrap">
									<a href="#" className="sbi_photo">
										<img src="https://webeetec.com/itsharks24/blog/admin/login.php/images/content/inst.jpg" alt="Francoise img" />
									</a>
								</div>
							</div>
							<div className="sbi_item sbi_type_image">
								<div className="sbi_photo_wrap">
									<a href="#" className="sbi_photo">
										<img src="images/content/inst2.jpg" alt="Francoise img" />
									</a>
								</div>
							</div>
							<div className="sbi_item sbi_type_image">
								<div className="sbi_photo_wrap">
									<a href="#" className="sbi_photo">
										<img src="images/content/inst3.jpg" alt="Francoise img" />
									</a>
								</div>
							</div>
							<div className="sbi_item sbi_type_image">
								<div className="sbi_photo_wrap">
									<a href="#" className="sbi_photo">
										<img src="images/content/inst4.jpg" alt="Francoise img" />
									</a>
								</div>
							</div>
							<div className="sbi_item sbi_type_image">
								<div className="sbi_photo_wrap">
									<a href="#" className="sbi_photo">
										<img src="images/content/inst5.jpg" alt="Francoise img" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);

}

export default Single;