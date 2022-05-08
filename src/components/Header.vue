<template>
  <div class="header_section">
    <div class="overlay"></div>
    <b-navbar toggleable="sm" class="kiswah_bar" type="light" variant="light">
      <div class="container">
        <div class="nav__">
          <b-navbar-nav class="md_hide">
            <!-- <button class="btn btn-primary" @click="showLogin">تسجيل الدخول</button> -->
          </b-navbar-nav>
          <div class="logo__section">
            <span class="logo_">
              <img src="@/assets/img/kiswah-w-logo.png" alt="kiswa logo" />
            </span>
          </div>
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
      class="kiswah_bar topper_view animate__animated"
      :class="viewHeader ? 'animate__pulse' : 'animate__fadeOutUp'"
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
                  @click="hideHeader()"
                ></font-awesome-icon>
              </div>
            </div>
          <b-navbar-nav class="mr-auto links_">
            <b-nav-item href="#footer"
              >اتصل بنا</b-nav-item
            >
            <b-nav-item href="/all-news">الأخبار</b-nav-item>
            <b-nav-item href="/offers">العروض</b-nav-item>
            <b-nav-item href="#work">طريقة العمل</b-nav-item>
            <b-nav-item to="/">عن كسوة</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <div class="logo__section">
              <span class="logo_">
                <img src="@/assets/img/kiswah-b-logo.png" alt="" />
              </span>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <!-- Main content -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-5">
          <div class="form_control animate__animated" v-inview:class="['animate__slideInUp']">
            <signup-form :signuppage="true"></signup-form>
          </div>
        </div>
        <div class="col-md-6 col-lg-7  d-flex">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import SignupForm from "./SignupForm.vue";
import eventHub from "../../eventBus";

export default {
  components: { FontAwesomeIcon, SignupForm },
  data() {
    return {
      faBars,
      faTimes,
      viewHeader: false,
      toggleLoginModal: false,
    };
  },
  methods: {
    showHeader() {
      this.viewHeader = true;
    },
    hideHeader() {
      this.viewHeader = false;
    },
    showLogin() {
      eventHub.$emit("customChange", !this.toggleLoginModal);
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