<template>
  <div class="success-page">
    <!-- Success Modal -->
    <b-modal
      size="md"
      ref="success_modal"
      @hidden="closeSuccessModal"
      dialog-class="success_modal"
      hide-footer
      hide-header
      centered
    >
      <div class="text-center p-5">
        <img
          class="success-img"
          height="60" width="60"
          src="../../assets/img/main/check.svg"
          alt="Success Svg"
        />
        <h4 class="mt-3">تم رفع طلبكم بنجاح.
        </h4>
        <h4>
          سيتصل بكم مندوبنا خلال يومين لتحديد توقيت الإستلام الذي يناسبكم.       </h4>
        <h4>شكراً جزيلاً لإختياركم كسوة
        </h4>
        <h4>
          نتمنى لكم يوماً طيباً.
        </h4>
      </div>
    </b-modal>
    <!-- Success Modal End-->
  </div>
</template>

<script>
export default {
  created() {
    window.fbq("track", "Order-Success");
  },
  mounted() {
    this.$refs["success_modal"].show();
  },
  methods: {
    closeSuccessModal() {
      this.$refs["success_modal"].hide();
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>