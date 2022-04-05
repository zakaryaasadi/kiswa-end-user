<template>
  <div class="body">
    <PagesHeader />
    <main>
      <img class="img-fluid" src="@/assets/img/strate-desktop.jpg">
      <div class="container" style="direction:rtl">
        <div class="row">
          <div class="col-md-12">
            <div class="align__flow">
              <p>تبرع الآن</p>
            </div>
          </div>

          <div class="col-md-6 mx-auto" style="direction:ltr;">

            <SignupFormDonate />

          </div>

          
        </div>


      </div>
      




    </main>
    <Footer />



  </div>
</template>

<script>
import PagesHeader from "../../components/PagesHeader.vue";
import Footer from "../../components/Footer.vue";
import SignupFormDonate from "../../components/SignupFormDonate.vue";


export default {
  components: { PagesHeader, Footer, SignupFormDonate },
};
</script>