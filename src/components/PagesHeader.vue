<template>
  <div class="pages_header">
    <b-navbar toggleable="sm" class="kiswah_bar" type="light" variant="light">
      <div class="container">
        <div class="nav__">
          <b-navbar-nav class="md_hide">
            <!-- <button class="btn btn-primary">تسجيل الدخول</button> -->
          </b-navbar-nav>
          <router-link class="logo__section" to="/">
            <span class="logo_">
              <img src="@/assets/img/kiswah-b-logo.png" alt="" />
            </span>
          </router-link>
        </div>
        <div class="toggle__header">
          <div class="burger">
            <font-awesome-icon
              :icon="faBars"
              @click="showHeader()"
              @mouseover="showHeader()"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
    </b-navbar>

    <b-navbar
      toggleable="sm"
      class="kiswah_bar animate__animated topper_view"
      :class="viewHeader ? 'animate__pulse' : 'animate__fadeOutUp' "
      type="light"
      variant="light"
      v-if="viewHeader"
    >
      <div class="container">
        <!-- <b-navbar-brand>
          <button class="btn btn-primary">تسجيل الدخول</button>
        </b-navbar-brand> -->

        <b-collapse id="nav-text-collapse" is-nav>
          <div class="toggle__header">
              <div class="burger_close">
                <font-awesome-icon
                  :icon="faTimes"
                  @click="showHeader()"
                ></font-awesome-icon>
              </div>
            </div>
          <b-navbar-nav class="mr-auto links_">
            <b-nav-item to="/">اتصل بنا</b-nav-item>
            <b-nav-item href="/all-news">الأخبار</b-nav-item>
            <b-nav-item to="/">طريقة العمل</b-nav-item>
            <b-nav-item to="/">عن كسوة</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto topper">
            <router-link class="logo__section" to="/">
              <span class="logo_">
                 <img src="@/assets/img/kiswah-b-logo.png" alt="" />
              </span>
            </router-link>
            
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      faBars,
      faTimes,
      viewHeader: false,
    };
  },
  methods: {
    showHeader() {
      this.viewHeader = !this.viewHeader;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-primary {
  height: 45px;
  min-width: 208px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}
</style>