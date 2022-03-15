<template>
  <div>
    <footer id="footer" class="d-flex align-items-center">
      <div class="container-fluid">
        <div class="row justify-content-md-center my-5">
          <div class="col-md-4 text-center">
            <h2 class="footer-heading">اتصل بنا</h2>

          </div>
        </div>
        <div class="row justify-content-md-center my-5">
          <div class="col-md-3 text-center my-3">
            <a class="contact-link" href="tel:+9200 23420" target="_blank">
              <font-awesome-icon :icon="faPhoneSquareAlt"></font-awesome-icon>
              <span>9200 23420</span>
            </a>
          </div>
          <div class="col-md-3 text-center my-3">
            <a
              class="contact-link"
              href="https://wa.me/966500070201"
              target="_blank"
            >
              <font-awesome-icon :icon="faWhatsapp"></font-awesome-icon>
              <span>+966 50 007 0201</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <footer>
      <div class="container">
        <div class="footer">
          <ul class="footer_links">
            <!-- <li><a href="">Status</a></li> -->
            <li>
              <a
                href="https://tookanapp.s3-us-west-2.amazonaws.com/smarturls/kiswaPolicy.html"
                target="_blank"
                >Privacy & Terms</a
              >
            </li>
            <li>
              <a href="https://wa.me/966500070201" target="_blank"
                >Contact Us</a
              >
            </li>
          </ul>
          <ul class="footer_links social_">
            <li></li>
            <li>
              <a href="">
                <font-awesome-icon :icon="faInstagram"></font-awesome-icon>
              </a>
            </li>
            <li>
              <a href=""
                ><font-awesome-icon :icon="faTwitter"></font-awesome-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      faBars,
      faTimes,
       faInstagram,
      faTwitter,
      faPhoneSquareAlt,
      faWhatsapp,
      article: null,
    };
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