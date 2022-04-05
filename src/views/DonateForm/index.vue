<template>
  <div class="body">
    <PagesHeader />
    <main>
      <img class="img-fluid" style="width:100%" src="@/assets/img/strate-desktop.jpeg"/>
      <div class="container" style="direction:rtl">
        <div class="row">
          <div class="col-md-12">
            <div class="align__flow">
              <p>تبرع الآن</p>
            </div>
          </div>

          <div class="col-md-6 mx-auto mb-5" style="direction:ltr;">

            <SignupFormDonate />

          </div>

          
        </div>


      </div>
      




    </main>


  </div>
</template>

<script>
import PagesHeader from "../../components/PagesHeader.vue";
import SignupFormDonate from "../../components/SignupFormDonate.vue";


export default {
  components: { PagesHeader, SignupFormDonate },
};
</script>