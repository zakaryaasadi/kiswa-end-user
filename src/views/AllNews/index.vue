<template>
  <div class="body">
    <PagesHeader />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="align__flow">
              <h6>الأخبار</h6>
              <p>
                تابع أخبار مشروع كسوة أول بأول عن طريق الموقع أو بالاشتراك في
                قائمة البريد الاخبارية
              </p>
            </div>
          </div>
          <div class="spinner-border text-info mx-auto mt-5" role="status" v-if="loading">
            <span class="visually-hidden"></span>
          </div>
          <div class="col-md-12" v-else>
            <div
              class="p__card main__"
              v-for="article in news"
              :key="article.id"
            >
              <img :src="article.image" :alt="`${article.title} thumbnail`" />
              <div class="card_overlay">
                <div class="p__info">
                  <h4>{{ article.title }}</h4>
                  <p :inner-html.prop="article.text | truncateString(80)"></p>
                  <button class="btn btn-primary" @click="moreNews(article)">
                    اقراء المزيد
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- News Modal -->
      <modal
        v-if="article"
        name="more_news"
        :width="700"
        height="auto"
        :resizable="true"
        :adaptive="true"
        :scrollable="true"
      >
        <div class="text-right pr-3 pt-2">
          <small class="text-primary mb-3 cancel" @click="cancelNews"
            ><b>x</b></small
          >
        </div>
        <div class="more__news">
          <div class="p__info">
            <h4>{{ article.title }}</h4>
            <p :inner-html.prop="article.text"></p>
          </div>
          <img
            :src="article.image"
            :alt="`${article.title} thumbnail`"
            class="more__news--image"
          />
        </div>
      </modal>
      <!-- News Modal End-->
    </main>
  </div>
</template>

<script>
import PagesHeader from "../../components/PagesHeader.vue";

export default {
  components: { PagesHeader },
  data() {
    return {
      news: [],
      article: null,
      loading: false,
    };
  },
  created() {
    window.fbq('track', 'allNews');
  },
  mounted() {
    this.getNews();
  },
  methods: {
    cancelNews() {
      this.$modal.hide("more_news");
    },
    moreNews(value) {
      this.article = value;
      this.$modal.show("more_news");
    },
    async getNews() {
      this.loading = true;
      let url = `https://apiv1.kiswaksa.com/api/news`;
      try {
        let res = await this.$http.get(url);
        this.news = res.data.data.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
  },
  filters: {
    truncateString(str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str;
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + "...";
    },
  },
};
</script>

<style scoped>
.cancel {
  font-size: 16px;
  cursor: pointer;
  text-align: right;
  padding-top: 30px;
  padding-left: 10px;
}

.vm--modal .more__news {
  padding: 30px !important;
  text-align: right;
}
.more__news--image {
  width: 600px !important;
  margin: 0 auto !important;
  object-fit: contain;
  /* max-width: 400px; */
}
</style>