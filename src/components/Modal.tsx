import "./css_files/Modal.css";
import { modalTitle } from "../utils/utils";
import { useEffect, useState } from "react";

function Modal(props: ModalProps) {
	const activeModal = props.isActive ? "active" : "hidden";
	let thumbnailSource: string = `/images/${props.thumbnail_name}.jpg`;
	let youtubeIconSource: string = "/icons/youtube.png";
	let wikipediaIcon: string = "/icons/wikipedia.png";
	const [dropMargin, setDropMargin] = useState<boolean>(false);

	if (import.meta.env.VITE_ENVIRONMENT === "DEV") {
		thumbnailSource = "/assets/static" + thumbnailSource;
		youtubeIconSource = "/assets/static" + youtubeIconSource;
		wikipediaIcon = "/assets/static" + wikipediaIcon;
	}
	document.addEventListener("keypress", (e) => {
		if (e.key === "27") props.onClose(); // escape key
	});

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 1500) {
				setDropMargin(true);
			} else {
				setDropMargin(false);
			}
		});

		return () => {
			window.addEventListener("resize", () => {
				if (window.innerWidth <= 1500) setDropMargin(true);
			});
		};
	}, []);

	useEffect(() => {
		function closeOnEscape(e: KeyboardEvent) {
			if (e.key === "Escape") props.onClose();
		}
		window.addEventListener("keydown", closeOnEscape);

		return () => {
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, [props.onClose]);

	return (
		<div className={`modal-container ${activeModal}`} id="modal">
			<button className="close-button" onClick={props.onClose}>
				X
			</button>
			<div className="movie-info-main-container">
				<div className="modal-thumbnail">
					<img src={thumbnailSource} alt="Thumbnail" />
				</div>
				{!dropMargin ? (
					<div
						style={{
							marginLeft: `${modalTitle(props.title)}%`,
						}}
						className="modal-title"
					>
						<p>{props.title}</p>
					</div>
				) : (
					<div className="modal-title">
						<p>{props.title}</p>
					</div>
				)}
			</div>
			<div className="button-container">
				<button id="youtube-button" type="button">
					<a
						href={`https://www.youtube.com/watch?v=${props.video_id}`}
						className="icon-button"
						target="_blank"
					>
						<img src={youtubeIconSource} />
						YouTube
					</a>
				</button>
				<button id="wikipedia-button" type="button">
					<a
						href={`https://bg.wikipedia.org/wiki/${props.title.replace(
							" ",
							"_"
						)}`}
						className="icon-button"
						target="_blank"
					>
						<img src={wikipediaIcon} />
						Wikipedia
					</a>
				</button>
			</div>
			<div className="movie-info-container">
				<li className="movie-info-list">
					<div className="movie-info-item" id="movie-duration">
						Времетраене: <span>{props.duration}</span> минути
					</div>
					<div className="movie-info-item" id="movie-release-year">
						Премиера: <span>{props.release_year}</span> г.
					</div>
					<div className="movie-info-item" id="movie-director">
						Режисъор: <span>{props.director}</span>
					</div>
				</li>
			</div>
		</div>
	);
}

export default Modal;
