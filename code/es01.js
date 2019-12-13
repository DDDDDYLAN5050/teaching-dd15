import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

import PhaseOne from '../code/components/phase-01.js';

const Home = ({ _body, _relativeURL, _parseYaml, groups, _ID }) => (
	<html>
		<main id="right--align">
		<div id="phase1" className="link--phase">
			<PhaseOne width="350" style={{strokeWidth: 1.5}}/>
			<p>Phase 1</p>
			<div className="title" style={{ marginBottom: "2rem", fontSize: "2rem" }}>Data as Material</div>
		</div>
		<div class="hero--text">{ _body }</div>
		</main>
			<main className="hero--text">
				<div className="projects--directory">
	 			 {
	 				 Object.keys(groups).map((item, i) => (
						 <>
						 <div key={item} id={groups[item].group} class="project--block">
						 <div class="project--cover">
						 <img key={item} src={groups[item].image}/>
						 <a key={item} href={ _relativeURL( '/course-results/es01/', _ID), groups[item].group + "/" + groups[item].group + ".pdf"}><p><i class="fas fa-arrow-circle-down"></i> Download the visualization</p></a>
						 </div>

						 <h3 key={item}>{"Group " + (i + 1)}</h3>
						 <h2 key={item}><a key={item} href={ _relativeURL( '/course-results/es01/', _ID), groups[item].group} target="_blank">{groups[item].title}</a></h2>
						 <p className="project--members" key={item}>{groups[item].names}</p>
						 <p className="project--description" key={item}>{groups[item].desc}</p>
						 </div>
						 </>
	 				 ))
	 			 }
 			 </div>
			</main>
			<aside id="single--phase">
				<div id="projects--aside">
					<h4>All Projects</h4>
					<ul className="projects--links">
						{
							Object.keys(groups).map(item => (
								<a key={item} href={"#" + groups[item].group}>
								<li className="group--link" key={item}>{groups[item].title}</li>
								</a>
							))
						}
					</ul>
				</div>
			</aside>
	</html>
);

export default Home;
