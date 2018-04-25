<template>
	<div class="post-wrap">
		<div class="single-post z-depth-3">
			<div class="post-title" :style="{ backgroundImage: 'url(' + data.imageUrl + ')' }">
				<div class="post-overlay">
					<h3>{{ data.title }}</h3>
				</div>
			</div>
			<p>{{ data.body }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: Object,
	},
};
</script>

<style scoped>
.post-wrap {
	overflow: hidden;
	width: 100vw !important;
}
.single-post {
	background: white;
	border-radius: 3px;
	overflow: hidden;
	margin: 0 auto;
	width: 50%;
	padding-bottom: 10px;
	text-align: center;
}
.single-post p {
	padding: 0px 20px;
	text-align: left;
}
.post-title {
	position: relative;
	background-size: cover;
	background-position: center;
}
.post-overlay {
	padding: 10px 20px;
	padding-top: 6vh;
	background: rgba(0, 0, 0, 0.4);
	position: relative;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	z-index: 2;
}
.post-title h3 {
	z-index: 3;
	color: white;
}
@media screen and (max-width: 800px) {
	.single-post {
		width: 90%;
	}
	.single-post p {
		font-size: 16px;
	}
	.post-overlay h3 {
		font-size: 25px;
	}
}
</style>
