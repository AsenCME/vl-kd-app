<template>
	<v-touch @swipe="swipe" :swipe-options="{threshold: 150}">
		<div id="main-content" v-show="loaded">

			<!-- Section 1: Landing Slider -->
			<div class="section first-section">
				<div class="name">
					<div class="name-text animated">Владимир Караджов</div>
					<div class="name-text second  animated">
						<span style="visibility: hidden">Владимир Караджов</span>
					</div>
					<div class="slogan animated">
						<div class="line"></div>
						<span> Пиша, следователно съм! </span>
					</div>
				</div>
				<div class="slide img-slide"></div>
				<div class="slide img-slide"></div>
				<div class="slide img-slide"></div>
			</div>

			<!-- Section 2: Latest Book -->
			<div class="section second-section">
				<div class="book-bg animated hide-on-large-only">
					<div class="overlay animated"></div>
				</div>
				<div class="book-text">
					<div class="animated book-title">Етиопска Приказка</div>
					<div class="animated book-slogan">Магичната история за най-голямото съкровище на света</div>
					<div class="buttons animated">
						<div class="animated buy-book hoverable">Купи Книгата</div>
						<div class="animated read-more hoverable">Прочети повече</div>
					</div>
					<div class="reveal-cover hide-on-large-only animated">
						<span class="open">Виж корицата</span>
						<span class="close" style="display: none">затвори</span>
					</div>
				</div>
				<div class="book-cover book-up animated hide-on-med-and-down">
					<div class="book-card">
						<img class="front z-depth-3" src="../assets/images/book_front.jpg" alt="Book Cover">
						<img class="back z-depth-3" src="../assets/images/book_back.jpg" alt="Book Cover">
					</div>
				</div>
			</div>

			<!-- Section 3: Recent Posts -->
			<div class="section third-section">
				<div class="heading animated hide-on-small-only">
					<div class="text">Последни Статии</div>
					<hr>
				</div>
				<slick class="sl-car animated" ref="slick" :options="slickOptions">
					<single-post v-for="post in posts" :key="post.id" :data="post"></single-post>
				</slick>
			</div>

			<!-- Section 4: About -->
			<div class="section forth-section">
				<div class="bio-wrap z-depth-3 animated">
					<div class="bio-card">
						<div class="bio-picture z-depth-3 animated hoverable"></div>
						<div class="bio-text">
							<div class="bio-alias hoverable">Писател</div>
							<div class="bio-name">Владимир Караджов</div>
							<div class="bio-desc">Владимир Николов Караджов е български учен и писател от гр. Благоевград. Доктор по география и университетски преподавател. Неговата любов към географията проличава в творчеството му, докато създава вълнуващи картини на екзотични приключения и чудни истории. Започва да пише през 2013-та година на една стара червена пишеща машина. Първоначално пише разкази и стихове. През октомври 2017-та година на пазара излиза „Етиопска приказка” - неговият дебютен роман, създаден в късното лято на 2015-та година. Към момента е автор на десетки разкази, стихове и свръхкратки истории.</div>
							<div class="bio-button hoverable">прочети повече</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Section 5: Contact -->
			<div class="section">
				<div class="heading animated" style="margin-left: 5vw;">
					<div class="text">Свържи се с мен</div>
					<hr>
				</div>
				<div class="side-info animated">
				</div>
				<div class="side-info-wrap">
					<div class="info-button">
						<i class="material-icons show">arrow_forward</i>
						<i class="material-icons close" style="display: none;">close</i>
					</div>
					<!-- <div class="info-text">Допълнителна информация</div> -->
					<div class="info-item animated fadeOutLeft">
						<i class="material-icons">location_on</i> Благоевград
					</div>
					<div class="info-item animated fadeOutLeft">
						<i class="material-icons">call</i> +359882939737
					</div>
					<div class="info-item animated fadeOutLeft">
						<i class="material-icons">mail_outline</i> preceptor@abv.bg
					</div>
				</div>
				<div class="contact-form row valign-wrapper">
					<form class="col s12" style="margin-top: 12.5vh;" @submit.prevent="sendMail()">
						<div class="row">
							<div class="form-field">
								<label for="email">Имейл Адрес
									<span class="needed">*</span>
								</label>
								<input v-model="mailOptions.sender" placeholder="example@abv.bg" id="email" type="email">
							</div>
							<div class="form-field">
								<label for="subject">Тема на съобщението
									<span class="needed">*</span>
								</label>
								<input v-model="mailOptions.subject" placeholder="I am a big fan!" id="subject" type="text">
							</div>
							<div class="form-field">
								<label for="message">Съобщение
									<span class="needed">*</span>
								</label>
								<textarea v-model="mailOptions.body" placeholder="Can we meet in person?" id="message" type="text" style="max-height: 40vh; resize: vertical; min-height: 20vh;"></textarea>
							</div>
							<div class="form-field">
								<button type="submit">Изпрати</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	</v-touch>
</template>

<script>
import Slick from "vue-slick";
export default {
	components: { Slick },
	name: "app",
	beforeMount() {
		this.getPosts();
	},
	data() {
		return {
			mailOptions: {
				sender: "",
				subject: "",
				body: "",
			},
			posts: [],
			loaded: false,
			slickOptions: {
				slidesToShow: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 3000,
				dots: false,
				centerMode: true,
				adaptiveHeight: true,
				variableWidth: true,
			},
		};
	},
	methods: {
		sendMail() {
			let baseUrl = "http://helixproject.kozle.eu/php/sendEmail.php";
			this.mailOptions.sender = "";
			this.mailOptions.subject = "";
			this.mailOptions.body = "";
		},
		next() {
			this.$refs.slick.next();
		},
		prev() {
			this.$refs.slick.prev();
		},
		reInit() {
			let currIndex = this.$refs.slick.currentSlide();
			this.$refs.slick.destroy();
			this.$nextTick(() => {
				this.$refs.slick.create();
				this.$refs.slick.goTo(currIndex, true);
			});
		},
		swipe(event) {
			let direction = event.direction;
			switch (direction) {
				case 2: // Left
					$.fn.fullpage.moveSlideRight();
					break;
				case 4: // Right
					$.fn.fullpage.moveSlideLeft();
					break;
				case 8: // Up
					$.fn.fullpage.moveSectionDown();
					break;
				case 16: // Down
					$.fn.fullpage.moveSectionUp();
					break;
			}
		},
		getPosts() {
			this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
				res => {
					let images = [
						"http://www.kinyu-z.net/data/wallpapers/35/823942.jpg",
						"https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
						"https://www.w3schools.com/w3css/img_fjords.jpg",
						"http://www.personal.psu.edu/oeo5025/jpg.jpg",
						"https://infostormer.com/wp-content/uploads/2017/12/gray-kitten.jpg",
					];
					let posts = res.body.slice(0, 5);
					posts.forEach((post, i) => {
						post.imageUrl = images[i];
					});
					this.posts = posts;
					this.loaded = true;
				},
				res => {
					console.log("error", res);
				},
			);
		},
	},
	watch: {
		posts(value) {
			this.reInit();
		},
	},
};
</script>

<style>

</style>
